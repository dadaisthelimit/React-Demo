import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterCard from './components/CounterCard/CounterCard';

const App = () => {
    return (
      <div className="App container p-4">
         <CounterCard />
         <CounterCard />
         <CounterCard />
      </div>
    );
  }

export default App;
