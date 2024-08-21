import { Routes, Route } from 'react-router-dom';

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import MainContent from './component/MainContent';
import QuickMenu from './component/quick/Quickmenu';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
          <Route path='/' element={<MainContent />}></Route>
      </Routes> 
      {/* <Footer waveBg={'bgType1ReverseR basetop'}></Footer> */}
      <QuickMenu></QuickMenu>
    </>
  );
}

export default App;
