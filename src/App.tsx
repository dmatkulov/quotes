import Toolbar from './components/Toolbar/Toolbar.tsx';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home.tsx';

function App() {
  
  return (
    <div className="container mx-auto">
      <header>
        <Toolbar/>
      </header>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}
        />
      </Routes>
    </div>
  );
}

export default App;
