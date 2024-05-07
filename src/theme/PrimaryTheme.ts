import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

interface IExtendedPaletteColor {
  main?: string;
  contrastText?: string;
  light?: string;
  dark?: string;
  25?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

interface IDesignPalette {
  primary: IExtendedPaletteColor;
  secondary: IExtendedPaletteColor;
  gray: IExtendedPaletteColor;
  error: IExtendedPaletteColor;
}
// interface IDatePickerClasses {
//   MuiPickersCalendarHeader: any;
// }

export interface IExpandedTheme extends ThemeOptions {
  palette: IDesignPalette;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const primaryTheme: any = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    // 700 is also the default color when you hover over an element
    primary: {
      main: '#2F5CFF',
      contrastText: '#FFF',
      light: '#15B79E',
      dark: '#175CD3',
      50: '#F0FDF9',
      100: '#CCFBEF',
      200: '#99F6E0',
      300: '#5FE9D0',
      700: '#175CD3',
      800: '#125D56',
      900: '#134E48',
    },
    secondary: {
      main: '#D1E9FF',
      contrastText: '#175CD3',
      dark: '#B2DDFF',
      25: 'F5FAFF',
      50: '#E8F3F8',
      100: '#D1E9FF',
      200: '#B2DDFF',
      300: '#73B2D4',
      400: '#4498C5',
      500: '#2E90FA',
      600: '#1570EF',
      700: '#175CD3',
      800: '#05202E',
      900: '#194185',
    },
    gray: {
      main: '#848FA6',
      25: '#848FA6',
      50: '#E6E9E9',
      100: '#CDD2D1',
      200: '#9295A6',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#000303',
    },
    error: {
      main: '#FEF3F2',
      contrastText: '#B42318',
      dark: '#FEF3F2',
      50: '#FEF3F2',
      500: '#F04438',
    },
    warning: {
      main: '#FDB022',
      contrastText: '#fff',
      dark: '#FDB022',
      400: '#FDB022',
      500: '#F79009',
      700: '#B54708',
      900: '#7A2E0E',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          '&.Mui-error': {
            color: '#F04438',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#F04438',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px',
          padding: `20px`,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: `0px`,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: `8px 0px`,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: '8px',
          boxShadow: 'none',
          fontWeight: 600,
          paddingY: '8px',
          fontFamily: 'Raleway bold',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          border: '1px solid #CCCCCC',
          color: 'black',
          '&:hover': {
            background: '#fff',
            border: '1px solid #CCCCCC',
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            backgroundColor: '#fff',
            borderRadius: '8px',
            minHeight: '30px',
          },
          input: {
            lineHeight: '24px',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        color: 'secondary',
        size: 'small',
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#E5E7EB',
          padding: '4px',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(222 230 239)',
          height: '10px',
          borderRadius: '4px',
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          padding: '0px',
        },
        labelContainer: {
          margin: 'auto',
          zIndex: '10',
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '8px',
        },
      },
    },
    MuiCalendarOrClockPicker: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: '500px',
          '& > div': {
            width: '100%',
          },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        header: {
          justifyContent: 'space-evenly',
          '& span': {
            width: '72px',
          },
        },
        weekContainer: {
          justifyContent: 'space-evenly',
          '& button, & div': {
            borderRadius: '200px',
            width: '72px',

            '&.Mui-selected': {
              backgroundColor: '#2E90FA !important',
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
};

export default responsiveFontSizes(createTheme(primaryTheme));
