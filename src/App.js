import { Routes, Route } from 'react-router-dom';

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import MainContent from './component/MainContent';
import QuickMenu from './component/quick/Quickmenu';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<MainContent />} />
      </Routes> 
      <Footer bgStyle={''} />
      <QuickMenu />
    </>
  );
}

export default App;
