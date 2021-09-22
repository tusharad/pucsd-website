import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Contact({ data }) {
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
        {data.title}
      </Typography>
      <h6>{data.post}</h6>
      <Typography variant="h6" gutterBottom>
        {data.title2}
      </Typography>
      <h6>{data.post2}</h6>
      <Typography variant="h6" gutterBottom>
        {data.title3}
      </Typography>
      <h6>{data.post3}</h6>
    </Grid>
  );
}

export default Contact;
