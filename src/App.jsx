import './App.css';
import Header from './components/layout/Header';
import Home from './components/main/Home';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div className="body">
      <Header/>
      <div className='main'>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
