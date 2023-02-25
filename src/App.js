import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';

function App() {

  return (
    <>
      <nav>
        <TopBar />
      </nav>
      <Router />
    </>
  );
}

export default App;
