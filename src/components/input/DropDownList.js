import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export default function DropDownList(props) {

    const { name, label, value, onChange, options } = props;

    return (
        <FormControl
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </Select>
        </FormControl>
    )

}  