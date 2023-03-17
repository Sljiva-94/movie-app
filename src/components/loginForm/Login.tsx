import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

const styles = () =>
  createStyles({
    form: {
      background: "rgba(249, 250, 245, 0.8)",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      borderRadius: 10,
      height: 450,
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: 15,
    },
    input: {
      marginTop: 20,
    },
    button: {
      marginTop: 40,
      marginBottom: 20,
    },
  });

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  const springs = useSpring({
    from: { x: 200 },
    to: { x: 0 },
  });

  const switchOnLogin = () => setIsLogin(true);
  const switchOnSignup = () => setIsLogin(false);

  return (
    <animated.div style={{ ...springs }}>
      <Box component="form" className={classes.form}>
        <Typography variant="h4" align="center">
          {isLogin ? "Login" : "Sign up"}
        </Typography>

        {!isLogin && (
          <>
            <TextField
              required
              id="standard-required"
              label="First Name"
              className={classes.input}
            />

            <TextField
              required
              id="standard-required"
              label="Last Name"
              className={classes.input}
            />
          </>
        )}

        <TextField
          required
          id="standard-required"
          label="E-mail"
          className={classes.input}
        />

        <TextField
          required
          id="standard-required"
          label="Password"
          type="password"
          className={classes.input}
        />

        <Button
          variant="contained"
          disableElevation
          color="primary"
          className={classes.button}
          type="submit"
        >
          {isLogin ? "Login" : "Sign up"}
        </Button>

        {isLogin ? (
          <Button variant="text" onClick={switchOnSignup}>
            Do not have an account?
          </Button>
        ) : (
          <Button variant="text" onClick={switchOnLogin}>
            Allredy have account?
          </Button>
        )}
      </Box>
    </animated.div>
  );
};

export default Login;
