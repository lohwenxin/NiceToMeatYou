import React from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function RadioButtonField(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}
      >
        {
            items.map(
                (item, index) => (
                    <FormControlLabel key={item.id} value={item.id} label={item.title} control={<Radio />} />
                )
            )
        }
      </RadioGroup>
    </FormControl>
  );
}
