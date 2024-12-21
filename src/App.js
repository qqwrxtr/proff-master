import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Our_Services from './components/Our_Services/Our_Services';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='flex flex-col justify-center items-center w-full'>
        <Banner/>  
        <Our_Services/>
      </main>
    </div>
  );
}

export default App;
