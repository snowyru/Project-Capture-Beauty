import NavBar from "./NavBar";
import { ThemeProvider } from '@mui/material/styles';
import Footer from "./Footer";


function Forgot() {

    // Place holder for theme
    let theme = {};

    return(
        <>
                {/* Start of Forgot password page */}
                <ThemeProvider theme={theme}>
                     <h2 className="m-5 p-5"><i>Sorry this feature is still being developed🧪</i>🍵</h2>
                </ThemeProvider>
                {/* End of Forgot password page */}
        </>
    )
}

export default Forgot;