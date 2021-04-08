import "./App.css";
import Login from "./components/Login";
// import Register from "./components/Register";
import {GlobalStyle} from './stylesGlobal'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Login />
    </div>
  );
}

export default App;
