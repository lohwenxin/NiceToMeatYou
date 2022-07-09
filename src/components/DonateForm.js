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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useForm, Form } from "./UseForm";
import TextInput from "./input/TextInput";
import RadioButtonField from "./input/RadioButtonField";
import DropDownList from "./input/DropDownList";
import { Link } from "react-router-dom";
import { send } from 'emailjs-com';

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
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
  gender: "",
  region: ""
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
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

  const handleGenderInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      gender: event.target.value,
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
          <Grid item xs={6}>
            <RadioButtonField
              name="gender"
              label="Gender"
              value={values?.gender}
              onChange={handleGenderInputChange}
              items={genderItems}
            />
            <DropDownList
              name="region"
              label="Region"
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
