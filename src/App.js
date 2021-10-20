import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Welcome2 from './component/Welcome2';
import Welcome3 from './component/Welcome3';

function App() {
  return (
    <div className="App">
     <Welcome name = "Alice" realName = "Wonderland"/> 
     {/* <Welcome2/>
     <Welcome3/> */}
    </div>
  );
}

export default App;
