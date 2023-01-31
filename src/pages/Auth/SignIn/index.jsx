import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import { Navigate } from "react-router-dom";
const SignIn = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  const onClose = () => {
    setOpen(false);
  };
  const changeEmail = (e) => {
    console.log("email:", e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    console.log("password:", e.target.value);
    setPassword(e.target.value);
  };
  const login = () => {
    console.log("login");
    if (email === "" || password === "") {
      setOpen(true);
    } else {
      console.log(email, password);
      localStorage.setItem("props.isLogged", true);
      return <Navigate replace to="/" />;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          // component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            Sign In
          </Button>
          <Grid container align="center">
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => {
                  props.setIsSignIn(false);
                }}
              >
                Don't have an account? Sign In
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        // message="Note archived"
        // action={action}
      >
        <Alert severity="error">
          Хэрэглэгчийн нэвтрэх нэр эсвэл нууц үг буруу байна.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignIn;
