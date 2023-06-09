import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from './views/HelloWorld/HelloWorld';
import Card from './components/Card/Card';
import { useParams } from 'react-router-dom';
import NamesList from './components/NamesList/NamesList';
const App = () => {
  const route = useParams();
    return (
      <div className="App container p-4">
          <div>
            <h1>weird div</h1>
            <h1>{route.name}</h1>
          </div>
          <Card message="Message" title="TEST"></Card>
          <NamesList/>
      </div>
    );
  }

export default App;
