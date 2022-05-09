import "./App.css";
import AppBar from "./components/AppBar";
// import WorkoutLog from "./components/WorkoutLog";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Workouts from "./pages/worrkoutLogs/Workouts";
import Login from "./pages/login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <AppBar />
      <Container>
        <Workouts />
      </Container> */}
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
