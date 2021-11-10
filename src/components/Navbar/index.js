// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <nav className="nav-dark-container">
          <ul className="list-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </div>
            <div className="nav-list">
              <Link to="/" className="link-item">
                <li className="dark-mode-heading">Home</li>
              </Link>
              <Link to="/about" className="link-item">
                <li className="dark-mode-heading">About</li>
              </Link>
            </div>
            <button
              type="button"
              testid="theme"
              className="theme-button"
              onClick={onClickToggleTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="light-theme"
              />
            </button>
          </ul>
        </nav>
      ) : (
        <nav className="nav-light-container">
          <ul className="list-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </div>
            <div className="nav-list">
              <Link to="/" className="link-item">
                <li className="nav-item-heading">Home</li>
              </Link>
              <Link to="/about" className="link-item">
                <li className="nav-item-heading">About</li>
              </Link>
            </div>
            <button
              type="button"
              testid="theme"
              className="theme-button"
              onClick={onClickToggleTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="dark-theme"
                onClick={onClickToggleTheme}
              />
            </button>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
