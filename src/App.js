import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Banner/>  
      </main>
    </div>
  );
}

export default App;
