import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { palette } from "@mui/system";

export default function Login() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          // m: "2rem 1rem",
          display: "flex",
          justifyContent: "center",
          width: "20%",
          p: 1,
        }}
      >
        <Stack>
          <TextField variant="filled" label="username" type="text" sx={{ mb: "1rem" }} />
          <TextField variant="filled" label="password" type="password" sx={{ mb: "1rem" }} />
          <Link to="/workouts">
            <Button variant="outlined" sx={{ textDecoration: "none", width: "100%" }}>
              Login
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
}
