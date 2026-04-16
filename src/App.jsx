import './App.css';
import Header from './components/layout/Header';
import Visual from './components/main/Visual';
import QuickMenu from './components/main/QuickMenu';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div className="body">
      <Header/>
      <div className='main'>
        <Visual/>
        <QuickMenu/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
