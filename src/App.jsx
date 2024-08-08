import './App.css';
import data from './data/etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <>
      <Listing data={data} />
    </>
  );
}

export default App;
