import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    bg?: Palette["primary"];
  }

  interface PaletteOptions {
    bg?: PaletteOptions["primary"];
  }
}


const TEXT_COLOR = "#dfcfb2";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#103d6e",
    },
    secondary: {
      main: "#4889cf",
    },
    background: {
      default: "#101a28",
      paper: "#192B3D",
    },
    text: {
      primary: TEXT_COLOR,
      secondary: TEXT_COLOR + "90",
    },
  },
  typography: {
    allVariants: {
      color: TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px #dfcfb230 solid",
          borderRadius: "0.75rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: TEXT_COLOR,
        },
      },
    },
  },
});

const SPRING_TEXT_COLOR = "#F3769F";

export const springTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BFFB92",
    },
    secondary: {
      main: "#9FFB82",
    },
    background: {
      paper: "#9FE0D2",
    },
    text: {
      primary: SPRING_TEXT_COLOR,
      secondary: SPRING_TEXT_COLOR + "90",
    },
		bg: {
			main: "#CDB2D6",
		},
  },
  typography: {
    allVariants: {
      color: SPRING_TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px #F8FF9C80 solid",
          borderRadius: "0.75rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#BFFB92",
        },
      },
    },
		MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#CDB2D6",
        },
      },
    },
  },
});

const SUMMER_TEXT_COLOR = "#FF4E62";

export const summerTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#2ECFCA",
    },
    background: {
      paper: "#F9F3DE",
    },
    text: {
      primary: SUMMER_TEXT_COLOR,
      secondary: SUMMER_TEXT_COLOR + "90",
    },
		bg: {
			main: "#F8DF77",
		},
  },
  typography: {
    allVariants: {
      color: SUMMER_TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px #FBDBA280 solid",
          borderRadius: "0.75rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: SUMMER_TEXT_COLOR,
        },
      },
    },
		MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: SUMMER_TEXT_COLOR+"70",
        },
      },
    },
  },
});

const HALLOWEEN_TEXT_COLOR = "#F75F1C";

export const halloweenTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#FF9A00",
    },
    background: {
      paper: "#000000",
    },
    text: {
      primary: HALLOWEEN_TEXT_COLOR,
      secondary: HALLOWEEN_TEXT_COLOR + "90",
    },
		bg: {
			main: "#6800B4",
		},
  },
  typography: {
    allVariants: {
      color: HALLOWEEN_TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px #BF6A00 solid",
          borderRadius: "0.75rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: HALLOWEEN_TEXT_COLOR,
        },
      },
    },
		MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: HALLOWEEN_TEXT_COLOR+"70",
        },
      },
    },
  },
});

const WINTER_TEXT_COLOR = "#6693aa";

export const winterTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#5098b3",
    },
    background: {
      paper: "#cad3df",
    },
    text: {
      primary: WINTER_TEXT_COLOR,
      secondary: WINTER_TEXT_COLOR + "90",
    },
		bg: {
			main: "#113640",
		},
  },
  typography: {
    allVariants: {
      color: WINTER_TEXT_COLOR,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px #6693aa solid",
          borderRadius: "0.75rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: WINTER_TEXT_COLOR,
        },
      },
    },
		MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: WINTER_TEXT_COLOR+"70",
        },
      },
    },
  },
});