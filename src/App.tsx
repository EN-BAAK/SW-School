import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./layouts/Navbar"
import ScreenHolder from "./layouts/ScreenHolder"
import Footer from "./layouts/Footer"
import Blogs from "./screens/Blogs"

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
                <Footer />
              </ScreenHolder>
            }
          />
          <Route
            path="/post/:id"
            element={
              <ScreenHolder>
                <Navbar />
                <Blogs />
                <Footer />
              </ScreenHolder>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
