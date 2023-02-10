import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allowAllCookies, allowSelectedCookies } from '../redux/actions/cookieAction';
import './cookieSettings.scss'

const CookieSettings = () => {
    const [cookies, setCookies] = useState({
        essential: true,
        marketing: true,
        functional: true,
        analytics: true,
    });

    const cookieState = useSelector((state) => state.cookies);
    const dispatch = useDispatch();

    return(
        <div 
            className="cookie-settings" 
            style={cookieState.accepted ? {display: "none"} : cookieState.showSettings ? {display: "flex"} : {}}
            >
            <p className='header-sm cookie-header'>Advanced Cookie Settings</p>
            <div className='cookie-settings-content'>
                <div className='cookie-box'>
                    <div className='cookie-inner-box'>
                        <p className='cookie-name'>Essential Cookies</p>
                        <label className="switch">
                            <input 
                                type="checkbox" 
                                disabled 
                                defaultChecked={cookieState.essential}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <p className='cookie-text'>These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.</p>
                </div>
                <div className='cookie-box'>
                    <div className='cookie-inner-box'>
                        <p className='cookie-name'>Marketing Cookies</p>
                        <label className="switch">
                            <input 
                                type="checkbox" 
                                checked={cookieState.marketing}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <p className='cookie-text'>These cookies are used to track advertising effectiveness to provide a more relevant service and deliver better ads to suit your interests.</p>
                </div>
                <div className='cookie-box'>
                    <div className='cookie-inner-box'>
                        <p className='cookie-name'>Functional Cookies</p>
                        <label className="switch">
                            <input 
                                type="checkbox" 
                                checked={cookieState.functional}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <p className='cookie-text'>These cookies collect data to remember choices users make to improve and give a more personalised experience.</p>
                </div>
                <div className='cookie-box'>
                    <div className='cookie-inner-box'>
                        <p className='cookie-name'>Analytics Cookies</p>
                        <label className="switch">
                            <input 
                                type="checkbox" 
                                checked={cookieState.analytics}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <p className='cookie-text'>These cookies help us to understand how visitors interact with our website, discover errors and provide better overall analytics.</p>
                </div>
            </div>
            <div className='cookie-btn-wrapper'>
                <button 
                    className='allow-all-btn' 
                    onClick={() => dispatch(allowAllCookies())}
                >
                    Allow all
                </button>
                <button 
                    className='allow-selected-btn' 
                    onClick={() => dispatch(allowSelectedCookies())}
                >
                    Allow selected
                </button>
            </div>
        </div>
    );
}

export default CookieSettings;