import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function WorkoutLog() {
  return (
    <>
      <Grid item sm={12} md={6} lg={4}>
        <Paper
          sx={{
            p: 1,
            border: "1px solid grey",
          }}
        >
          this is a workout log.
        </Paper>
      </Grid>
    </>
  );
}
