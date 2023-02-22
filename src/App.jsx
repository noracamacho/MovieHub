import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
// import { NavBar } from './components/NavBar';
import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      {/* <NavBar /> */}
      <Footer />
    </div>
  )
}

export default App
