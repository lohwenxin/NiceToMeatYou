import React from 'react'
import { TextField } from "@material-ui/core";

export default function TextInput(props) {

    const { id, name, label, value, onChange } = props;

    return (
        <TextField
            variant="outlined"
            id={id}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
          />
    )

}  