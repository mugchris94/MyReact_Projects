import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUsers from './Components/ListUsers';

import Portal from './Components/Portal';

function App() {
  return (
    <div className="App">
      <ListUsers Id='1' Name="James" Email='james007@outlook.com' Company='Samsung'/>
      <Portal username="Enter Username" pswd="Enter Password"/>
    </div>
  );
}

export default App;
