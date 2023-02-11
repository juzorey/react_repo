import './App.css';
import Employee from './components/employee.js';

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
    
      </>
      ):(
        <p>you cannot see</p>
      )} 
    </div>
  );
}

export default App;
