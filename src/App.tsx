import Toolbar from './components/Toolbar/Toolbar.tsx';
import {Route, Routes} from 'react-router-dom';
import QuoteForm from './containers/QuoteForm/QuoteForm.tsx';
import Home from "./containers/Home/Home.tsx";

function App() {
  
  return (
    <div className="container mx-auto">
      <header>
        <Toolbar/>
      </header>
      <div>
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}
          />
          <Route path="/quotes" element={(
            <Home/>
          )}
          />
          <Route path="/quotes/:quoteId" element={(
            <Home/>
          )}/>
          <Route path="/quotes/:quoteId/edit" element={(
            <QuoteForm/>
          )}/>
          <Route path="/quotes/add-quote" element={(
            <QuoteForm/>
          )}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
