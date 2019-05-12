import React, { Component } from "react";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import LandingPage from "./components/landingpage/LandingPage";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer';
import Copyright from './components/Copyright'

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <Header />
        <LandingPage />
        <Skills />
        <AboutMe />
        <Projects />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default App;
