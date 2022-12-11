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
          <a href="https://github.com/xzachtly" rel="noopener">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/duncanz/" rel="noopener">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
