// Import the Google Cloud client library
const { BigQuery } = require("@google-cloud/bigquery");
// Create a client
const bigqueryClient = new BigQuery();

export default async function handler(req, res) {
  const regionId = req.query.region;

  console.log("Request received");

  console.log("Querying BigQuery");

  const sqlQuery =
    "Select name, tech_assigned, region from `stomato-info.gradient_growers." +
    regionId +
    "`";

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: "US",
  };

  let grower_list = [];

  // Run the query
  const [rows] = await bigqueryClient.query(options);

  // console.log("Query Results:");
  rows.forEach((row) => {
    const name = row["name"];
    const tech = row["tech_assigned"];
    const region = row["region"];
    const grower = { name: name, tech: tech, region: region };
    // console.log(grower);
    grower_list.push(grower);
  });

  // console.log(grower_list);
  console.log("Done Querying");
  res.status(200).json({ growers: grower_list });
}
