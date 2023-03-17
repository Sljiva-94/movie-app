import Header from "../components/header/Header";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import LadnigPageBackground from "../img/jira-bg-op.jpg";
import { Grid } from "@material-ui/core";
import Login from "../components/loginForm/Login";

const styles = () =>
  createStyles({
    wrapper: {
      height: "calc(100vh - 90px)",
      width: "100%",
      marginTop: 10,
      backgroundImage: `url('${LadnigPageBackground}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
      position: "relative",
    },
  });

const useStyles = makeStyles(styles);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid
        container
        className={classes.wrapper}
        justifyContent="center"
        alignItems="center"
      >
        <Login />
      </Grid>
    </>
  );
};

export default LandingPage;
