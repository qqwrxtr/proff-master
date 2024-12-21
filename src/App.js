import Banner from './components/Banner/Banner';
import Brone from './components/Brone/Brone';
import Header from './components/Header/Header';
import Our_Services from './components/Our_Services/Our_Services';
import Spare from './components/Spare/Spare';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='flex flex-col justify-center items-center w-full'>
        <Banner/>  
        <Our_Services/>
        <Spare/>
        <Brone/>
      </main>
    </div>
  );
}

export default App;
