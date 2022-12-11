import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub, faLinkedin);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zach Duncan</h1>
        <div className="link-wrapper">
          <a href="https://github.com/xzachtly" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/duncanz/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
