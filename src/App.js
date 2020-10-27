import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(setRepositories(response.data))
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Novo Reposotório ${Date.now()}`,
      url: 'https://github.com/',
      techs: ["java", "ruby"]
    });
    const repository = response.data
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const repositoryIndex = repositories.findIndex(repo => repo.id === id);

    if (repositoryIndex < 0) {
      throw new Exception('Repositório inexistente')
    }
    await api.delete(`repositories/${id}`)

    setRepositories(
      repositories.filter(repository => repository.id != id)
    );
  }


  return (
    <>
      <Header title="repositories" />

      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddRepository}>Adicionar</button>
    </>
  )
}

export default App;