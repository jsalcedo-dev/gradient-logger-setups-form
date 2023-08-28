import React from "react";
import { Field, ErrorMessage } from "formik";
import classes from "./LoggerSetups.module.css";

const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <Field name={name} {...rest}>
        {({ field, form: { touched, errors }, meta }) => {
          return options.map((option) => {
            return (
              <div key={option.key} className={classes.radio}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default RadioButtons;
