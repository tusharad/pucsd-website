import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header";
import MainFeaturedPost from "./Components/MainFeaturedPost";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const sections = [
  {
    title: "About",
    data: ["History, Mission", "HOD's message", "Reaching PUCSD", "Pune City"],
    url: "#",
  },
  {
    title: "Academics",
    data: [
      "Syllabi",
      "Programmes",
      "Academic Calender For Affiliated colleges",
    ],
    url: "#",
  },
  { title: "Facilities", data: ["UoP Central Library"], url: "#" },
  {
    title: "Cells",
    data: [
      "Anti-Ragging Cell",
      "Alumni Cell",
      "Placement Cell",
      "SysAds",
      "Facilitation Group",
    ],
    url: "#",
  },
  { title: "Students", data: ["Placements", "Student Webpages"], url: "#" },
  { title: "Admissions", data: [], url: "#" },
  {
    title: "Contact us",
    data: [
      "Admission/Entrance",
      "Administration",
      "Teaching Staff/Faculty",
      "Department phone numbers ",
    ],
    url: "#",
  },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    {
      title: "Advertisement: Assistant Professor (Contractual July 2021)",
      url: "#",
    },
    { title: "MSc Entrance Exam Syllabus 2021", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="PUCSD" sections={sections} />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <>
                      <MainFeaturedPost post={mainFeaturedPost} />
                      <Main title="From the firehose" />
                    </>
                  )}
                />

                <Route
                  exact
                  path="/about"
                  component={() => (
                    <Sidebar
                      title={sidebar.title}
                      description={sidebar.description}
                      archives={sidebar.archives}
                      social={sidebar.social}
                    />
                  )}
                />
              </Switch>
            </Router>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
