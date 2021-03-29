import Navbar from "./components/Navbar"
import Buttons from "./components/Buttons"
import { modes, items } from "./asset/data"

function App() {
  return (
    <>
      <Navbar />
      <Buttons modes={modes} items={items} />
    </>
  )
}

export default App
