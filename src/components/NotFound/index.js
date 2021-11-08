// Write your code here
import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="dark-not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="dark-not-found-image"
            />
            <h1 className="dark-not-found-heading">Lost Your Way?</h1>
            <p className="dark-not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        ) : (
          <div className="light-not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="light-not-found-image"
            />
            <h1 className="light-not-found-heading">Lost Your Way?</h1>
            <p className="light-not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
