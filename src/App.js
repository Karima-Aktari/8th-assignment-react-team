import Header from './components/Header/Header';
import Team from './components/Team/Team';
import './App.css';

function App() {
  return (
    <div>
      <div className="h1 bg-secondary text-white text-center py-2">
        <Header />
      </div>
      <div className="mt-4 mx-auto">
        <Team />
      </div>
    </div>
  );
}

export default App;
