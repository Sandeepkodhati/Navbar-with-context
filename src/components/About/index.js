// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="about-dark-container">
            <div className="about-dark-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-dark"
              />
              <h1 className="dark-about-heading">About</h1>
            </div>
          </div>
        ) : (
          <div className="about-light-mode-container">
            <div className="about-light-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-light"
              />
              <h1 className="light-about-heading">About</h1>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
