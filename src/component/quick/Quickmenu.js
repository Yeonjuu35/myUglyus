import Quickitem from './Quickitem';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import '../../scss/quick.scss'


const QuickMenu = () => {
  useEffect(() => {
    const handleToggleMenu = () => {
      document.querySelector(".quickStyle").classList.toggle("showmenu");
    };

    const quickPlusIcon = document.querySelector(".quickStyle .quickplusicon");
    quickPlusIcon.addEventListener("click", handleToggleMenu);

    return () => {
      quickPlusIcon.removeEventListener("click", handleToggleMenu);
    };
  }, []);
    
    return (
      <aside className="quickStyle">
        <div className='radishQuick'>
            <ul className='d-flex flex-lg-column'>
              <Quickitem></Quickitem>             
            </ul>
            <Link to="#none" className='quickplusicon d-none d-lg-block'>
                <img src="/img/quick/plus.svg" alt="더보기" className='quickIconPlus'/>
            </Link>
        </div>
      </aside>
    );
  };
  
  export default QuickMenu;
