import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const jobs = ["Levar esposa ao trabalho", 'Dar café da manhã para o bebê', 'Exercicio fisico', 'arrumar casa', 'fazer almoço', 'estudar']
  return jobs.map((element)  => Task(element));
}

export default App;
