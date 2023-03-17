import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Link } from "@material-ui/core";
import Logo from "../../img/logo.png";

const styles = () =>
  createStyles({
    header: {
      background: "#ffffff",
    },
    container: {
      maxWidth: "100%",
      height: 80,
    },
    navItem: {
      marginRight: 30,
      color: "#000000",
      transition: "0.2s",
      "&:hover": {
        color: "#4287f5",
      },
    },
    logo: {
      marginLeft: 30,
      color: "#000000",
      height: 50,
      width: 50,
    },
  });

const useStyles = makeStyles(styles);
const navItems = ["Login", "Sign up"];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Grid
        container
        className={classes.container}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <img src={Logo} className={classes.logo} alt="logo" />
        </Grid>

        <Grid item>
          {navItems.map((navItem) => (
            <Link
              href="#"
              underline="none"
              key={navItem}
              className={classes.navItem}
            >
              {navItem}
            </Link>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
