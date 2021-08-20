import React, { useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const App = () => {

  function switcher() {
    document.querySelector('.color-switcher').classList.toggle('active');
  }

  useEffect(() => {
    let themeColor = document.querySelectorAll('.theme-buttons');
    themeColor.forEach(color => color.addEventListener('click', () => {
      let background = color.style.background;
      document.querySelector('body').style.background = background;;
    }))
  })

  return (
    <>
      {/* ==========  Color Switcher ==========  */}
      <div className="color-switcher">
        <div className="switcher-btn" onClick={switcher}>
          <SettingsIcon />
        </div>
        <h3>Select Color</h3>
        <div className="theme-buttons-container">
          <span className="theme-buttons" style={{ background: "#020024" }}></span>
          <span className="theme-buttons" style={{ background: "#3f00ff" }}></span>
          <span className="theme-buttons" style={{ background: "#0e0e0e" }}></span>
          <span className="theme-buttons" style={{ background: "#770b0b", }}></span>
          <span className="theme-buttons" style={{ background: "#214415", }}></span>
          <span className="theme-buttons" style={{ background: "#0e25f0bb", }}></span>
          <span className="theme-buttons" style={{ background: "#126f92" }}></span>
          <span className="theme-buttons" style={{ background: "#585024" }}></span>
          <span className="theme-buttons" style={{ background: "#350048" }}></span>
          <span className="theme-buttons" style={{ background: "#240003" }}></span>
          <span className="theme-buttons" style={{ background: "#bb8c22" }}></span>
          <span className="theme-buttons" style={{ background: "#ca5363" }}></span>
        </div>
      </div>

      {/* ============== Toggler Button for navbar ==========*/}
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="hamburger-bar">
        <i className="fas fa-bars"></i>
      </label>

      {/* ============ Navigation start ============ */}
      <Navigation />

      {/* ============= Main Section ============= */}
      <main>
        <Switch>
          <Route path="/" exact> <HomePage /> </Route>
          <Route path="/about" exact> <AboutPage /> </Route>
          <Route path="/service" exact> <ServicePage /> </Route>
          <Route path="/resume" exact> <ResumePage /> </Route>
          <Route path="/portfolio" exact> <PortfolioPage /> </Route>
          <Route path="/contact" exact> <ContactPage /> </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  )
}

export default App;
