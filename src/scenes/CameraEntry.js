import React from "react";
import { Link } from 'react-router-dom';

import { useCameraEntry as useStyles } from "../styles/Camera";

function CameraEntry() {
  const width = 640;
  const height = 640;
  const styles = useStyles();

  const [showCamera, setShowCamera] = React.useState(false);
  const [showCanvas, setShowCanvas] = React.useState(false);
  const [data, setData] = React.useState([]);

  const cameraRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  // open camera ---> hide canvas
  const openCamera = () => {
    setShowCanvas(false);
    const opt = {
      audio: false,
      video: {
        width: width,
        height: height,
        // facingMode: { exact: 'environment' }
      },
    };
    navigator.mediaDevices.getUserMedia(opt).then((stream) => {
      const video = cameraRef.current;
      // old browsers may not have srcObject
      if ('srcObject' in video) {
        video.srcObject = stream;
      }
      video.onloadedmetadata = () => {
        video.play();
      };
    }).catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    });
  };

  // close camera
  const closeCamera = () => {
    const video = cameraRef.current;
    if ('srcObject' in video) {
      const stream = video.srcObject;
      if ('getTracks' in stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => {
          track.stop();
        });
      }
    }
    setShowCamera(false);
  };

  // when show button is clicked ---> open camera ---> hide canvas
  const show = () => {
    if (showCamera) {
      return;
    }
    setShowCamera(true);
  };

  // when close button is clicked ---> close camera
  const close = () => {
    if (!showCamera) {
      return;
    }
    closeCamera();
  };

  // when detect button is clicked ---> show canvas
  // ---> detect image ---> data updated ---> close camera 
  const detect = () => {
    if (!showCamera) {
      return;
    }
    setShowCanvas(true);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  React.useEffect(() => {
    if (showCamera) {
      openCamera();
    }
  }, [showCamera]);

  // detect image ---> data updated ---> close camera 
  React.useEffect(() => {
    if (showCanvas) {
      const request = async () => {
        // get image
        const video = cameraRef.current;
        const canvas = canvasRef.current;
        if (canvas == null) {
          return;
        }
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const imgStr = canvas.toDataURL('image/png');
        const base64Img = imgStr.split(';base64,').pop();
        // close camera
        if ('srcObject' in video) {
          const stream = video.srcObject;
          if ('getTracks' in stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => {
              track.stop();
            });
          }
        }
        setShowCamera(false);
        // upload image
        const options = {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            "image": base64Img,
          }),
        };
        const response = await fetch('https://ec7f-180-129-102-25.ap.ngrok.io/detect', options);
        const data = await response.json();
        // data updated
        if (data.code === 0) {
          setData(data.data);
        }
      }
      request();
    }
  }, [showCanvas]);

  // data updated
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    for (let i = 0; i < data.length; i++) {
      const color = getRandomColor();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      const x1 = data[i].box[0];
      const y1 = data[i].box[1];
      const x2 = data[i].box[2];
      const y2 = data[i].box[3];
      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
      ctx.font = "18px Arial";
      ctx.fillText(data[i].name + " " + (data[i].score * 100).toFixed(1), x1, y1 - 8);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={show} className={styles.button}>Open Camera</button>
        <button onClick={close} className={styles.button}>Close Camera</button>
      </div>
      {showCamera ?
        <div className={styles.cameraContainer}>
          <video
            id="camera"
            ref={cameraRef}
            className={styles.camera}
          />
        </div>
        : null
      }
      {showCanvas ?
        <div className={styles.canvasContainer}>
          <canvas
            id="canvas"
            ref={canvasRef}
            width={width}
            height={height}
            className={styles.canvas}
          />
        </div> : null
      }
      <div className={styles.buttonContainer}>
        <button onClick={detect} className={styles.button}>Detect</button>
        <Link
          to={{
            pathname: "menus",
            state: { data: [...new Set(data.map((item) => item.name))] }
          }}
          className={styles.link}
        >
          <button className={styles.button}>Menus</button>
        </Link>
      </div>
    </div>
  );
}

export default CameraEntry;
