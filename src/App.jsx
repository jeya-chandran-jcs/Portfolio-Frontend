import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Home from './components/Home'
import Skills from './components/Skill'
import About from './components/About'
import Intern from './components/Intern'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
function App() {
 return(
  
  <Router>
    
    <Routes>
    <Route path="/" Component={Homepage}/>
    <Route path="/home" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/skills" Component={Skills}/>
      <Route path="/intern" Component={Intern}/>
      <Route path="/education" Component={Education}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/projects" Component={Projects}/>
      <Route path="/resume" Component={Resume}/>

    </Routes>
  </Router>
 )
}

export default App
// import React from 'react';
// import { Link } from 'react-scroll';
// import Home from './components/Home';
// import About from './components/About';
// import Skill from './components/Skill';

// import './App.css';

// const App = () => {
//   return (
//     <div>
//       <header className="header">
//         <nav className="navbar">
//           <Link to="home" smooth={true} duration={500}>Home</Link>
//           <Link to="about" smooth={true} duration={500}>About</Link>
//           <Link to="skills" smooth={true} duration={500}>Skills</Link>
      
//         </nav>
//       </header>
//       <main>
//         <section id="home"><Home /></section>
//         <section id="about"><About /></section>
//         <section id="skills"><Skill /></section>
      
//       </main>
//     </div>
//   );
// };

// export default App;
