import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import Grid from "@material-ui/core/Grid"

const Menu = ({ items, props }: any) => {
  const classes = useStyles(props)
  const [select, selectItem] = useState({ items })

  //Select an item if condition is met
  const selectedItem = (index: any) => {
    const array = items.map((item: any) => {
      if (index === item) {
        item.isSelected = !item.isSelected
      }
      return { ...item }
    })
    selectItem({ items: array })
  }

  //Style an item if condition is met
  const styleItem = (index: any) => {
    const styled =
      index.isSelected === true ? `${classes.selected}` : `${classes.list}`
    return styled
  }

  //Chenge text content based on the the button selected
  const changeMode = (index: any) => {
    const mode = index.mode === true ? `Admin${index.name}` : `${index.name}`
    return mode
  }

  //Change background based on the button selected
  const changeBackgroundColor = (index: any) => {
    const color = index.mode === true ? `${classes.admin}` : `${classes.app}`
    return color
  }

  return (
    <>
      <List>
        {items.map((entry: any) => (
          <Grid
            item
            xs={4}
            key={entry.name}
            className={changeBackgroundColor(entry)}
          >
            <ListItemText
              className={styleItem(entry)}
              primary={changeMode(entry)}
              onClick={() => selectedItem(entry)}
            />
          </Grid>
        ))}
      </List>
    </>
  )
}

const useStyles = makeStyles({
  admin: {
    backgroundColor: "#bdc3c7",
    padding: "1px",
    marginLeft: "15px",
  },

  app: {
    padding: "1px",
    marginLeft: "15px",
  },

  list: {
    margin: "20px ",
    textAlign: "center",
    padding: "10px",
    border: "2px solid",
    "&:hover": {
      cursor: "pointer",
    },
  },
  selected: {
    backgroundColor: "#c0392b",
    color: "#ffff",
    margin: "20px",
    textAlign: "center",
    padding: "10px",
    border: "2px solid",
    "&:hover": {
      cursor: "pointer",
    },
  },
})

export default Menu
