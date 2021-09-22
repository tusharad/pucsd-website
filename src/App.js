import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Academics from "./Components/Academics";
import Cells from "./Components/Cells";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./Components/data.json";
import { Link } from "react-router-dom";

const theme = createTheme();

const NotFound = () => (
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
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </Grid>
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Router>
            <Header title="PUCSD" sections={data.sections} />
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <>
                      <MainFeaturedPost post={data.mainFeaturedPost} />
                      <Main data={data.main} />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/about"
                  component={() => (
                    <>
                      <Main data={data.about} />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/academics"
                  component={() => (
                    <>
                      <Academics data={data.academics} />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/cells"
                  component={() => (
                    <>
                      <Cells data={data.cells} />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/Admissions"
                  component={() => (
                    <>
                      <Main data={data.admissions} />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/Contact"
                  component={() => (
                    <>
                      <Contact data={data.contact} />
                    </>
                  )}
                />

                <Route component={NotFound} />
              </Switch>
              <Sidebar
                title={data.sidebar.title}
                description={data.sidebar.description}
                archives={data.sidebar.archives}
                social={data.sidebar.social}
              />
            </Grid>
          </Router>
        </main>
      </Container>
      <Footer title={data.Footer.title} description={data.Footer.description} />
    </ThemeProvider>
  );
}
