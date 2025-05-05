
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  return (

    <ThemeProvider>
      <CurrencyProvider>
        <Navbar/>
        <Content />
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
