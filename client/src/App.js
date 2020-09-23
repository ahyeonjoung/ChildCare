import React, { Component } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Sticky } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import MenuBar from "./components/MenuBar";
import "semantic-ui-css/semantic.min.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#9E58EE",
      main: "#7610EB",
      dark: "#2F0459",
      contrastText: "#FFFFFF",
    },
    grey: {
      main: "#666666",
      grey4: "#EFEFF4",
    },
    background: {
      default: "#000000",
      paper: "#FAFAFA",
    },
  },
  background: {
    default: "#FAFAFA",
    two: "#F9F9F9",
    three: "#F7F7F7",
    four: "#E9E9EA",
    grey: "#E5E5E5",
  },

  breakpoints: {
    values: {
      iphone: 375,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },

  overrides: {
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 20,
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: "17px",
        borderRadius: 8,
        padding: "0 16px",
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        "&:focus": {
          outline: "none",
        },
      },
      outlined: {
        fontWeight: 600,
        Color: "#8a8a8f",
        borderWidth: 2,
        borderColor: "#8a8a8f",
        borderRadius: 20,
        Height: 32,
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiToolbar: {
      dense: {
        minHeight: 40,
      },
    },
    MuiIconButton: {
      root: {
        width: 40,
        height: 40,
        alignItems: "center",
        // alignSelf: "flex-end",
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiButtonBase: {
      root: {
        "&:focus": {
          outline: "none",
        },
      },
    },
    MuiInputBase: {
      root: {},
    },
    MuiTypography: {
      root: {
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      h1: {
        /* Heading 1 [17] SB */
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "72px",
      },

      h2: {
        /* Heading 2 [14] SB */
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 16,
      },
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div
        style={{
          zIndex: 100,
          position: "fixed",
          height: "60px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #D3D3D3",
        }}
      >
        <Router>
          <div>
            <Sticky>
              <MenuBar />
            </Sticky>
          </div>
          <div>
            <ThemeProvider theme={theme}>
              <Route exact path="/demo" component={Demo} />
              <Route exact path="/" component={Home} />
            </ThemeProvider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
