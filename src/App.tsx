import * as React from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Tabs/Home/Home";
import About from "./components/Tabs/About/About";
import Projects from "./components/Tabs/Projects/Projects";
import Contact from "./components/Tabs/Contact/Contact";

const App: React.FC = () => {
  return (
    <div>
      <NavBar message={31}/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
