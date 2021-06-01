import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponents';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponents';
// import CreateEmployeeComponent from './components/CreateEmployeeComponents';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponents';
// import ViewEmployeeComponent from './components/ViewEmployeeComponents';
function App() {
  return (
    <div className="container">
        <ListEmployeeComponent/>
    </div>
  );
}

export default App;
