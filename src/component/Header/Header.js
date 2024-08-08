import usdata from '../../data/data.json';
import '../../scss/header.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
    const gnbdata = usdata.gnb;
    const menuData = {};

    gnbdata.forEach(item => {
        const prnumParts = item.prnum.split('|');
        
        if (prnumParts.length === 1) {
            menuData[prnumParts[0]] = {
                ...item,
                subMenus: []
            };
        } else if (prnumParts.length === 2) {
            const parentIndex = prnumParts[0];
            if (menuData[parentIndex]) {
                menuData[parentIndex].subMenus.push(item);
            }
        }
    });
    
    const [isHovered, setIsHovered] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                document.body.classList.add('scrollmode');
                document.body.classList.remove('hovermode');
            } else {
                document.body.classList.remove('scrollmode');
                document.body.classList.remove('hovermode');
            }
        };
    
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        if (activeMenu !== null) {
            document.body.classList.add('hovermode');
        } else {
            document.body.classList.remove('hovermode');
        }
    }, [activeMenu]);
    
    useEffect(() => {
        if (isHovered && window.innerWidth >= 991) {
            document.body.classList.add('hovermode');
        } else {
            document.body.classList.remove('hovermode');
        }
    }, [isHovered]);
    
    const handleMouseOver = () => {
        if (window.innerWidth >= 991) {
            setIsHovered(true);
        }
    };
    
    const handleMouseOut = () => {
        if (window.innerWidth >= 991) {
            setIsHovered(false);
        }
    };
    
    const handleMenuClick = (index) => {
        if (window.innerWidth <= 990) {
            setActiveMenu(activeMenu === index ? null : index);
        }
    };

    return (
        <header className='fixed-top customFluid'>
            <div className='container coustomWidthL naviStyle d-flex justify-content-between align-items-lg-center align-items-stretch p-0 flex-column flex-lg-row py-lg-2 py-0'>
                <div className='navibox d-flex justify-content-between align-items-center px-lg-0 px-2'>
                    <h1>
                        <a href="/">
                            <img className='logoWidth logoMargin' src='./img/header/logo.svg' alt="어글리어스 로고" />
                        </a>
                    </h1>
                    <a href="#" className='eventTimer d-flex justify-content-center align-items-center d-lg-none'>
                        <img src="./img/header/clock.svg" alt="#" class="me-2" />
                        <span className='fontEventTimer'>올해 마지막 한정판매 시작!</span>
                    </a>
                </div>
                
                <ul className='gnb d-flex justify-content-center align-items-center'>
                    {Object.values(menuData).map((menu, index) => (
                        <li
                            key={index}
                            className={`gnbli gnbli${index} position-relative${activeMenu === index ? ' active' : ''}`}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={() => handleMenuClick(index)}
                        >
                            <Link to={menu.gnblink} className={`naviIcon${index} d-lg-block d-flex justify-content-between align-items-center`}>
                                <span className='fontNavi'>{menu.gnbnm}</span>
                            </Link>
                            {menu.subMenus.length > 0 && (
                                <ul className={`gnbul position-absolute text-center text-nowrap ${index < Object.values(menuData).length - 2 ? 'ulStyle1' : index === Object.values(menuData).length - 2 ? '' : 'ulStyle2'}`}>
                                    {menu.subMenus.map((subMenu, subIndex) => (
                                        <li key={subIndex} className='ulSubmenu d-flex justify-content-center align-items-center'>
                                            <Link to={subMenu.gnblink}>
                                                <span className='fontNaviSub'>{subMenu.gnbnm}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="d-lg-flex justify-content-lg-center align-items-lg-center d-none">
                    <li className='pe-4'>
                        <a href="#"><span className="fontUtil">로그인</span></a>
                    </li>
                    <li>
                        <a href="#"><span className="fontUtil">회원가입</span></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
