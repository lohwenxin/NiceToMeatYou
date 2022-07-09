import { makeStyles } from "@material-ui/core/styles";

export const useCameraEntry = makeStyles(() => ({
  container: {
    margin: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    margin: 20,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
  link: {
    textDecoration: 'none',
  },
}));
