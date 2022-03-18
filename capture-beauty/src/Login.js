import * as React from 'react';
import {useRef} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormHelperText } from '@mui/material';

function Login() {

    // ThemeProvider for later
    const theme = createTheme();
        //currently primary is blue, secondary is purple

    // Validation code
    let validEmail = true;
    function ValidateEmail(inputText){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
        {
        console.log("Valid email address!");
        return validEmail = true;
        }
        else
        {
        console.log("You have entered an invalid email address!");
        return validEmail = false;
        }
    }
    const valueRef = useRef('') //create ref for email
    const handleChange = () => {
        ValidateEmail(valueRef.current.value);
    }
    //end of validation code

    //extract email and password, replace if it doesn't work with your backend
    const handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    return(
        <>
        <NavBar/>
            {/* Start of login page */}
                {/* Empty theme provider for later  */}
               <ThemeProvider theme={theme}> 
                <Container component="main" maxWidth="xs">
                    {/* Box of whole log in component */}
                    <Box
                    sx={{
                        marginTop: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        {/* Circled lock icon */}
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                            {/* Log in title */}
                            <Typography component="h1" variant="h5">
                                Log in
                            </Typography>
                                {/* Text box for email input */}
                                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                    inputRef={valueRef} //get by Ref
                                    onChange={handleChange} //checks for validity on change
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    />
                                        <FormHelperText error variant="standard" id="component-error-text">Please enter a valid email address!</FormHelperText>
                                    {/* Text box for password input */}
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    />
                                        {/* Remembers jwt token */}
                                        <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                        />
                                            {/* Log in button */}
                                            <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}>
                                            Log In
                                            </Button>
                                                {/* Forgot password or register links */}
                                                <Grid container>
                                                    <Grid item xs>
                                                        <Link to="/forgot" variant="body2">
                                                        Forgot password?
                                                        </Link>
                                                    </Grid>
                                                        <Grid item>
                                                            <Link to="/Resgister" variant="body2">
                                                            {"Don't have an account? Register now!"}
                                                            </Link>
                                                        </Grid>
                                                </Grid>
                                </Box>
                    </Box>
                </Container>
            </ThemeProvider>
   
            {/* End of login page */}
        <Footer/>
        </>
    )
}

export default Login;