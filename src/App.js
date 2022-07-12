import './App.css';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses/Courses';
import Tutors from './components/Tutors/Tutors';

function App() {
  return (
    <div className="App">
      <main className='bodyWrapper'>
        <Hero />
        <Courses />
        <Tutors />
      </main>
    </div>
  );
}

export default App;
