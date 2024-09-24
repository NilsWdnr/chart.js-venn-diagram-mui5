import React, { useState } from "react";
import lightTheme from "./assets/themes/LightTheme";
import darkTheme from "./assets/themes/DarkTheme";
import {
  Divider,
  Paper,
  Switch,
  ThemeProvider,
  Grid,
  CssBaseline
} from "@mui/material";
import ChartVenn from "./components/ChartVenn";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paperCustom: {
    padding: 16,
    fontFamily: "roboto",
    minHeight: window.innerHeight,
    borderRadius: 0
  },
  typographyCustom: {
    marginBottom: "1rem"
  },
  dividerCustom: {
    marginTop: "2rem"
  }
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={createTheme(darkMode ? darkTheme : lightTheme)}>
      <CssBaseline />
      <Paper className={classes.paperCustom} elevation={0}>
        <Grid container direction="column">
          <Grid item xs={1}>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Grid>
          <Grid>
            <Divider style={{ margin: "24px 0 24px 0" }} />
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={false} md={2} />
            <Grid item xs={12} md={8}>
              {/* Here should all the components come */}
              <ChartVenn />
            </Grid>
            <Grid item xs={false} md={2} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
