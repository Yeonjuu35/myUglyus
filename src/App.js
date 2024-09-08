import { Routes, Route } from 'react-router-dom';

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer';
import MainContents from './component/MainContents';
import QuickMenu from './component/quick/Quickmenu';

import "../src/scss/background.scss"

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<MainContents />} />
      </Routes> 
      <Footer bgStyle={'bgType1L footercustom'} />
      <QuickMenu />
    </>
  );
}

export default App;
