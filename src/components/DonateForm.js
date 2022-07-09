import React, { useState, useEffect, setValues } from "react";
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
import TextInput from "./input/TextInput";
import RadioButtonField from "./input/RadioButtonField";
import DropDownList from "./input/DropDownList";
import { Link } from "react-router-dom";
import { send } from 'emailjs-com';

const foodTypes = [
  { id: "male", title: "Staples" },
  { id: "produce", title: "Fresh Produce" },
  { id: "meat", title: "Meat" },
  { id: "dairy", title: "Dairy" },
  { id: "cannedGoods", title: "Canned Goods" },
  { id: "snacks", title: "Snacks" },
  { id: "condiments", title: "Condiments" },
  { id: "beverages", title: "Beverages" },
  { id: "other", title: "Others" },
];

const foodStateArr = [
  { id: "6", title: "> 6 Months" },
  { id: "3", title: "> 3 Months" },
  { id: "1", title: "Less Than 1 Month" }
];

const regionItems = [
  { id: "north", title: "North" },
  { id: "east", title: "East" },
  { id: "south", title: "South" },
  { id: "west", title: "West" },
];

const initialFormValues = {
  fullName: "",
  mobile: "",
  email: "",
  foodType: "",
  description:"",
  foodState: "",
  region: ""
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1.5),
  },
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1.5),
    },
  }
}));

export default function DonateForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initialFormValues);

  const handleFullNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };

  const handleMobileInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      mobile: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleFoodTypeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      foodType: event.target.value,
    }));
  };

  const handleDescriptionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      description: event.target.value,
    }));
  };

  const handleFoodStateInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      foodState: event.target.value,
    }));
  };

  const handleRegionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      region: event.target.value,
    }));
  };

  //   const { values, setValues, handleInputChange } = useForm(initialFormValues);

  const onSubmit = (e) => {
    send(
      'service_nkaryao',
      'template_qr7pnm9',
      values,
      '9RSkoj8IFmJMPs0ri'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div>
      <form className = {classes.root} autoComplete="off" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={3}>
            <TextInput
              id="fullName"
              name="fullName"
              label="Full Name"
              value={values?.fullName}
              onChange={handleFullNameInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput
              id="mobile"
              label="Mobile Number"
              name="mobile"
              value={values?.mobile}
              onChange={handleMobileInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <TextInput
              id="email"
              label="Email Address"
              name="email"
              value={values?.email}
              onChange={handleEmailInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioButtonField
              name="foodType"
              label="Food Type"
              value={values?.foodType}
              onChange={handleFoodTypeInputChange}
              items={foodTypes}
            />
          </Grid>

          <Grid item xs={3}>
            <TextInput
              id="description"
              label="Description"
              name="description"
              value={values?.description}
              onChange={handleDescriptionInputChange}
            />
          </Grid>
          <Grid item xs={3}>
          <DropDownList
              name="foodStateArr"
              label="Shelf Life"
              value={values?.foodState}
              onChange={handleFoodStateInputChange}
              options={foodStateArr}
            />
          </Grid>

          <Grid item xs={6}>
          <DropDownList
              name="region"
              label="Region (For Nearest Collection Point)"
              value={values?.region}
              onChange={handleRegionInputChange}
              options={regionItems}
            />
          </Grid>
        </Grid>
      </form>
      <Link
        to={{
          pathname: "/thank-you",
          state: values, // your data array of objects
        }}
      >
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}
