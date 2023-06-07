import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './views/HelloWorld/HelloWorld';
import Card from './components/Card/Card';
import { useParams } from 'react-router-dom';
const App = () => {
  const route = useParams();
    return (
      <div className="App container p-4">
        <HelloWorld>
          <div>
            <h1>weird div</h1>
            <h1>{route.name}</h1>
          </div>
          <Card message="MEssage" title="TEST"></Card>
        </HelloWorld>
      </div>
    );
  }

export default App;
