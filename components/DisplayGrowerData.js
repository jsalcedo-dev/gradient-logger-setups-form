import classes from "./TestDatabase.module.css";

export default function DisplayGrowerData(props) {
  const { growers, title } = props;
  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.container}>
        <ul>
          {growers.map((grower) => (
            <li key={grower.name}>
              {grower.name} &lt;--&gt; Serviced by: {grower.tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
