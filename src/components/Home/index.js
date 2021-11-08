// Write your code here
import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="home-dark-mode-container">
            <div className="home-dark-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-dark"
              />
              <h1 className="home-dark-heading">Home</h1>
            </div>
          </div>
        ) : (
          <div className="home-light-mode-container">
            <div className="home-light-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-light"
              />
              <h1 className="home-light-heading">Home</h1>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
