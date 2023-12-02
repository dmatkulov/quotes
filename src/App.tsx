import Toolbar from './components/Toolbar/Toolbar.tsx';
import {Route, Routes} from 'react-router-dom';
import Quotes from './containers/Quotes/Quotes.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  
  return (
    <div className="container mx-auto">
      <header>
        <Toolbar/>
      </header>
      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-6">
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={(
              <Quotes/>
            )}
            />
            <Route path="/quotes/:quoteId" element={(
              <Quotes/>
            )}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
