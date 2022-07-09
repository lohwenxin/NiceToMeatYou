import React from "react";
import "../../App.css";
import DonateForm from "../DonateForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function DonatePage() {
  const classes = useStyles();

  return (
    <>
      <h1 className="donate-page">DONATE FOOD</h1>
      <Paper className={classes.pageContent}>
        <h2>Donate your food to make a difference today!</h2>
        <DonateForm />
      </Paper>
    </>
  );
}
