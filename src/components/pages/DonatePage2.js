import React from "react";
import "../../App.css";
import FormPage2 from "../FormPage2";
import { Paper, makeStyles } from "@material-ui/core";
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function DonatePage2() {
  const classes = useStyles();
  const location = useLocation()
  const { values } = location.state

  return (
    <>
      <h1 className="donate-page">PAGE 2</h1>
      <Paper className={classes.pageContent}>
        <h3>Add Food Or Ingredient To Be Donated!</h3>
        {values}
        <FormPage2 />
      </Paper>
    </>
  );
}
