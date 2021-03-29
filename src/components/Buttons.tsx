import { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FormControl, RadioGroup, FormControlLabel } from "@material-ui/core"
import Radio from "@material-ui/core/Radio"
import Menu from "./Menu"

const Buttons = ({ modes, items, props }: any) => {
  const classes = useStyles(props)
  const [value, setValue] = useState("app")
  const [select, selectMode] = useState({ items })

  //Add isSelected and mode to data and set their value to false once component is rendered
  useEffect(() => {
    const array = select.items.map((item: any) => {
      item.isSelected = false
      item.mode = false
      return { ...item }
    })
    selectMode({ items: array })
  }, [])

  //Handle change event once button is selected
  const handleChange = (event: any) => {
    setValue(event.target.value)
    const array = items.map((item: any) => {
      item.mode = !item.mode
      item.isSelected = false
      return { ...item }
    })
    selectMode({ items: array })
  }

  return (
    <>
      <FormControl className={classes.root}>
        {modes.map((mode: any) => (
          <RadioGroup
            aria-label="mode"
            name="mode"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              key={mode}
              value={`${mode}`}
              control={<Radio />}
              label={`${mode}`}
            />
          </RadioGroup>
        ))}
      </FormControl>

      <Menu items={items} />
    </>
  )
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginLeft: "600px",
  },
})

export default Buttons
