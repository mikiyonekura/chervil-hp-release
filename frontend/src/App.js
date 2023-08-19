import './App.css';
import "./slide.css"
import {BrowserRouter as Router,Route,Routes, useLoaderData} from "react-router-dom";
import AppComponents from './components/AppComponents'

function App() {

  return (
    <Router>
      <AppComponents />
    </Router>
  );
}

export default App;


