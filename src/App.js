import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


PrimeReact.ripple = true;


function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
