import { useState, useEffect } from "react";
import DisplayGrowerData from "./DisplayGrowerData";
import classes from "./TestDatabase.module.css";

export default function TestDatabase() {
  const [southGrowers, setSouthGrowers] = useState([]);
  const [northGrowers, setNorthGrowers] = useState([]);
  const [southFields, setSouthFields] = useState([]);
  const [northFields, setNorthFields] = useState([]);
  const [growers, setGrowers] = useState([]);
  const [fields, setFields] = useState([]);
  const [showGrowers, setShowGrowers] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  const refreshDataHandler = async () => {
    await fetch("http://localhost:3000/api/growers/south")
      .then((res) => res.json())
      .then((data) => {
        setSouthGrowers(data.growers);
      });

    await fetch("http://localhost:3000/api/growers/north")
      .then((res) => res.json())
      .then((data) => {
        setNorthGrowers(data.growers);
      });
  };
  setGrowers(southGrowers);

  const showGrowersHandler = () => {
    // console.log(growers);
    setShowGrowers(!showGrowers);
  };

  const showFieldsHandler = () => {
    setShowFields(!showFields);
  };

  const showSouthGrowersHandler = async () => {
    if (southGrowers.length === 0) {
      await fetch("http://localhost:3000/api/growers/south")
        .then((res) => res.json())
        .then((data) => {
          setSouthGrowers(data.growers);
        });
    }
    setGrowers(southGrowers);
  };

  const showNorthGrowersHandler = async () => {
    if (northGrowers.length === 0) {
      await fetch("http://localhost:3000/api/growers/north")
        .then((res) => res.json())
        .then((data) => {
          setNorthGrowers(data.growers);
        });
    }
    setGrowers(northGrowers);
  };

  const showSouthFieldsHandler = async () => {
    if (southFields.length === 0) {
      await fetch("http://localhost:3000/api/fields/south")
        .then((res) => res.json())
        .then((data) => {
          setSouthFields(data.fields);
        });
    }
    setFields(southFields);
  };

  const showNorthFieldsHandler = async () => {
    if (northFields.length === 0) {
      await fetch("http://localhost:3000/api/fields/north")
        .then((res) => res.json())
        .then((data) => {
          setNorthFields(data.fields);
        });
    }
    setFields(northFields);
  };

  return (
    <div>
      <div className={classes.container}>
        <button className={classes.button} onClick={showGrowersHandler}>
          Show Growers
        </button>
        <button className={classes.button} onClick={showFieldsHandler}>
          Show Fields
        </button>
      </div>
      <div>
        {showGrowers && (
          <div className={classes.container}>
            <button
              className={classes.button}
              onClick={showSouthGrowersHandler}>
              Show South Growers
            </button>
            <button
              className={classes.button}
              onClick={showNorthGrowersHandler}>
              Show North Growers
            </button>
          </div>
        )}
      </div>

      <div>
        {showFields && (
          <div className={classes.container}>
            <button className={classes.button} onClick={showSouthFieldsHandler}>
              Show South Fields
            </button>
            <button className={classes.button} onClick={showNorthFieldsHandler}>
              Show North Fields
            </button>
          </div>
        )}
      </div>

      <div>
        {showGrowers && growers.length > 0 && (
          <DisplayGrowerData growers={growers} title="Growers: " />
        )}
      </div>
      <br />
      <div className={classes.divider} />
      <br />
      <div>
        {showFields && fields.length > 0 && (
          <DisplayGrowerData growers={fields} title="Fields: " />
        )}
      </div>
    </div>
  );
}
