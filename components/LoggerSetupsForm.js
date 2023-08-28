"use client";
import { Fragment, useState, useEffect } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import classes from "./LoggerSetups.module.css";
import FormikControl from "./FormikContainer";

const LoggerSetupsForm = (props) => {
  const [growers, setGrowers] = useState([]);
  let grower_dropdown = [];
  if (props.grower) {
    grower_dropdown = props.grower.map((grower) => {
      return { key: grower.name, value: grower.name };
    });
  }

  const technician_dropdown = [
    { key: "Vanessa", value: "Vanessa" },
    { key: "Adriana", value: "Adriana" },
    { key: "Exsaelth", value: "Exsaelth" },
    { key: "Development Test Tech", value: "Development Test Tech" },
  ];

  const yes_no_dropdown = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const north_or_south_dropdown = [
    { key: "North", value: "North" },
    { key: "South", value: "South" },
  ];

  const field_type_dropdown = [
    { key: "Commercial", value: "Commercial" },
    { key: "Demo", value: "Demo" },
    { key: "R&D", value: "R&D" },
  ];

  return (
    <div>
      <h1 className={classes.title}>Logger Setups Form 2024</h1>
      <Formik
        initialValues={{
          technician_name: "",
          additional_stations: "",
          total_number_of_stations: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          technician_name: Yup.string()
            .oneOf(technician_dropdown, "Invalid Technican Selected")
            .required("Required"),
          additional_stations: Yup.string()
            .oneOf(["Yes", "No"], "Invalid Selection")
            .required("Required"),
          total_number_of_stations: Yup.number().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        <Form className="classes.form">
          <div className={classes.card}>
            <div className={classes.question}>Technician Name: </div>
            <FormikControl
              control="radio"
              label="technician_name"
              name="technician_name"
              options={technician_dropdown}
            />
          </div>

          <div className={classes.card}>
            <div className={classes.question}>
              Are you adding stations to a previous field?
            </div>
            <FormikControl
              control="radio"
              label="additional_stations"
              name="additional_stations"
              options={yes_no_dropdown}
            />
          </div>

          <div className={classes.card}>
            <div className={classes.question}>
              Total Number of Stations in Field:
            </div>
            <FormikControl
              control="input"
              label="total_number_of_stations"
              name="total_number_of_stations"
              type="number"
            />
          </div>

          <div className={classes.card}>
            <div className={classes.question}>North or South: </div>
            <FormikControl
              control="radio"
              label="north_or_south"
              name="north_or_south"
              options={north_or_south_dropdown}
            />
          </div>

          <div className={classes.card}>
            <div className={classes.question}>Field Type: </div>
            <FormikControl
              control="radio"
              label="field_type"
              name="field_type"
              options={field_type_dropdown}
            />
          </div>

          <div className={classes.card}>
            <div className={classes.question}>Growers: </div>
            <FormikControl
              control="select"
              label="growers"
              name="growers"
              options={grower_dropdown}
            />
          </div>

          <div className={classes.button_container}>
            <button type="submit" className={classes.button}>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoggerSetupsForm;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/growers/all");
  const data = await res.json();

  return {
    props: {
      growers: data.growers,
    },
  };
}
