import './App.css';
import Navigation from './components/Navigation';
// import Main from './components/Main';
import Footer from './components/Footer';
import Players from './components/Players';
// import { Players } from './shared/ListOfPlayers';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}
export default App;
