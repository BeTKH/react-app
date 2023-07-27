import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Remove 'Switch'
import { Switch } from 'react-router'; // Add this line
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExp';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/projects">My Projects</Link>
            </li>
            <li>
              <Link to="/work-experience">Work Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route  path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/work-experience">
            <WorkExperience />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
