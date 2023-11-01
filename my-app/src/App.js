import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.jsx';
import MainPage from './components/MAinPAge/MainPage.jsx';
import Chat from './components/Chat/Chat.jsx';
import Fec from './components/api/api.jsx';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navigation />
      <Routes>
     
        <Route path='/a' Component={MainPage} />
        <Route path='/api' Component={Fec} />
        <Route path='/chat' Component={Chat} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;