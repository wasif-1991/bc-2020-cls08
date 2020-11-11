import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/wasif-1991/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }

    getRepos();
    



    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }, [])

  return (
    <div className="App">
      <h1>Your all seeing my all Repositories.</h1>
      <ol>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ol>
    </div>
  );
}

export default App;
