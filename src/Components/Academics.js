import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Main({ data }) {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {data.title1}
      </Typography>
      <h6>{data.post1}</h6>
      <Typography variant="h5" gutterBottom>
        <a href={data.syllabi1}>Syllabi</a>
      </Typography>
      <Typography variant="h6" gutterBottom>
        {data.title2}
      </Typography>
      <Typography variant="h5" gutterBottom>
        <a href={data.syllabi2}>Syllabi</a>
      </Typography>
      <h6>{data.post2}</h6>
      <Typography variant="h6" gutterBottom>
        {data.title3}
      </Typography>
      <h6>{data.post3}</h6>
      <Typography variant="h5" gutterBottom>
        <a href={data.syllabi3}>Syllabi</a>
      </Typography>
    </Grid>
  );
}

export default Main;
