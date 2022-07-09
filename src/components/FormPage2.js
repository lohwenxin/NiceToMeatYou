import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useForm, Form } from "./UseForm";
import TextInput from "./input/TextInput";
import RadioButtonField from "./input/RadioButtonField";
import DropDownList from "./input/DropDownList";
import { Link } from "react-router-dom";

const initialFormValues = {
  foodToDonate: [{ ingredient_name: "", qty: "", state: "" }],
};

export default class FormPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.state,
    };
  }
  render() {
    return <h1>{this.props.location.state.values}</h1>;
  }
}

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const addFood = (event) => {
//   event.preventDefault();
//   this.setState({
//     foodToDonate: [
//       ...this.initialFormValues.foodToDonate,
//       { ingredient_name: "", qty: "", state: "" },
//     ],
//   });
// };
// const removeFood = (index) => {
//   this.initialFormValues.foodToDonate.splice(index, 1);
//   this.setState({
//     foodToDonate: this.initialFormValues.foodToDonate,
//   });
// };

// const handleIngredientChange = (event) => {
//   if (["ingredient_name", "qty", "state"].includes(event.target.name)) {
//     let foodToDonate = [...this.state.foodToDonate];
//     foodToDonate[event.target.id][event.target.name] = event.target.value;
//     this.setState({ foodToDonate });
//   } else {
//     this.setState({ [event.target.name]: event.target.value });
//   }
// };
// const handleSubmit = () => {};

// export default class FormPage2 extends React.Component {
//   constructor(props) {
//     super(props);
//         this.state={
//             value:this.props.location.state,
//         }
//   }
//     const classes = useStyles();

//   const { values, setValues, handleInputChange } = useForm(initialFormValues);

//   render() {
//   return (
//     <div>
//       <Form>
//         <Grid container>
//           <Grid item xs={3}>
//             <TextInput
//               id="fullName"
//               name="fullName"
//               label="Full Name"
//               value={values?.fullName}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextInput
//               id="mobile"
//               label="Mobile Number"
//               name="mobile"
//               value={values?.mobile}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextInput
//               id="email"
//               label="Email Address"
//               name="email"
//               value={values?.email}
//               onChange={handleInputChange}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <RadioButtonField
//               name="gender"
//               label="Gender"
//               value={values?.gender}
//               onChange={handleInputChange}
//               items={genderItems}
//             />
//             <DropDownList
//               name="region"
//               label="Region"
//               value={values?.region}
//               onChange={handleInputChange}
//               options={regionItems}
//             />
//           </Grid>
//         </Grid>

//         <h4>Food To Donate</h4>
//         {values?.foodToDonate.map((food, index) => {
//           return (
//             <div key={index}>
//               <TextInput
//                 id={index}
//                 label="Ingredient Name"
//                 name="ingredient_name"
//                 value={food?.ingredient_name}
//                 onChange={handleIngredientChange}
//               />
//               <IconButton onClick={this.removeFood(index)}>
//                 <RemoveIcon />
//               </IconButton>
//               <IconButton onClick={this.addFood}>
//                 <AddIcon />
//               </IconButton>
//             </div>
//           );
//         })}
//       </Form>
//       <Link
//         to={{
//           pathname: "/page-2",
//           state: values, // your data array of objects
//         }}
//       >
//         <Button
//           className={classes.button}
//           variant="outlined"
//           color="primary"
//           type="submit"
//         >
//           Submit Request!
//         </Button>
//       </Link>
//     </div>
//   );
// }
// }
