import { useState } from 'react';
import { ReactComponent as TangleBrand } from '../resources/icons/tangleOfflineLogoWhite.svg'
import { ReactComponent as MenuIcon } from '../resources/icons/menu.svg'
import { ReactComponent as Cross } from '../resources/icons/cross.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import './navigationBar.scss'
import { setLanguage } from '../redux/actions/languageAction';

import contentFile from '../content.json'

const NavigationBar = () => {
    const [isActive, setActive] = useState(false);

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    const handleToggle = () => {
      setActive(!isActive);
    };

    const closeNav = () => {
        setActive(false);
    }

    return(
        <nav className={`navbar ${isActive ? "sticky-bar" : ""}`}>
            <Link onClick={closeNav} to="/" className="logo">
                <TangleBrand style={{width: "150px", height: "30px", fontFamily: "Nasalization, sans-serif"}} /> 
            </Link>
            <span onClick={handleToggle} className="menu-toggle">
                {isActive ? 
                <Cross className='menu-icon' /> 
                :
                <MenuIcon className='menu-icon' />
                }
            </span>
            <ul className={`nav ${isActive ? "mobile-nav" : ""}`}>
                <li className="nav-item lang-item">
                    <a className={`lang ${language.lang === "dutch" ? "active-lang" : ""}`} onClick={() => {
                            dispatch(setLanguage(contentFile.dutch));
                        }}
                    >
                        NL
                    </a>
                    <a className={`lang ${language.lang === "english" ? "active-lang" : ""}`} onClick={() => {
                            dispatch(setLanguage(contentFile.english));
                        }}
                    >
                        EN
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="merchant" onClick={handleToggle}>{language.navbar.menu[0].link}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;