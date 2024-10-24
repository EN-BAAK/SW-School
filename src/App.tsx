import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./layouts/Navbar"
import ScreenHolder from "./layouts/ScreenHolder"

const App = (): React.JSX.Element => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ScreenHolder>
                <Navbar />
                <Home />
              </ScreenHolder>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
