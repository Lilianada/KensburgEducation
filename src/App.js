import './App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <main className='bodyWrapper'>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
