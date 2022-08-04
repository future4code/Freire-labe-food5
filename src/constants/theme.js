// material-ui
import { createTheme } from '@material-ui/core/styles';

// colors
import { midGreen, white, black } from "./colors"

const theme = createTheme({
    palette: {
        primary:{
            main: midGreen,
            contrastText: black
        },
        secondary: {
            main: black,
            contrastText: white 
        },
        text: {
            primary: white
        }
    }
})

export default theme;