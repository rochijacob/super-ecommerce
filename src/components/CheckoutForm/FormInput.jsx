import React from "react";
//UI Components
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        render={({ field }) => (
          <TextField fullWidth label={label} required={required} />
        )}
        control={control}
      />
    </Grid>
  );
};

export default FormInput;
