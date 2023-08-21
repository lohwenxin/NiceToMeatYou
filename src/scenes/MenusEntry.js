import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Option } from 'nasi-lemak';
import { Button } from "@material-ui/core";

import { useMenusEntry as useStyles } from "../styles/Menus";

function MenusEntry() {
  const styles = useStyles();
  const location = useLocation();
  const names = Option.value(Option.truthy(location.state.data), []);
  
  return (
    <div className={styles.container}>
      {names.map((name) => {
        return (
          <Link
            key={name}
            to={{
              pathname: "/",
              state: { data: name }
            }}
            className={styles.link}
          >
            <Button variant="outlined" size="small" color="primary">{name}</Button>
          </Link>
        )
      })}
    </div>
  );
}

export default MenusEntry;
