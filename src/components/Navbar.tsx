import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import logo from "../asset/Logo-darkbg@2x.png"

const Navbar = (props: any) => {
  const classes = useStyles(props)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.root} />
        </Toolbar>
      </AppBar>
    </>
  )
}

const useStyles = makeStyles({
  root: {
    height: "50px",
  },
})

export default Navbar
