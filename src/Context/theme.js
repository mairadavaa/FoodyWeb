import { createTheme, ThemeProvider } from "@mui/material/styles";
const Theme = createTheme({
    palette: {
        primary: {
            main: '#225675'
        },
        secondary: {
            main: '#3d8c95'
        },
        success:{
            main: '#66b60f'
        },
        background: {
            default: "#f7fbf6"
        },
        textcolor:{
            main: "#fff"
            
        }
    }

})
export function CustomTheme({ children }) {
    return <ThemeProvider theme={Theme}> {children}</ThemeProvider>
}