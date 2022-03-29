import logo from './logo.svg';
import './App.css';
import Developer from './components/Developer';

function App() {
  const dev1 = {name:'jose', age: 20, country:'Brasil'}
  const dev2 = {name:'joao', age: 21, country:'Espanha'}
  return (
    <div className="App">
      <header className="App-header">
        <Developer name={dev1.name} age={dev1.age} country={dev1.country} />
        <Developer name={dev2.name} age={dev2.age} country={dev2.country} />
      </header>
    </div>
  );
}

export default App;
