import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../resources/icons/arrowRight.svg';

const Footer = (props) => {
    const location = useLocation();
    const content = useSelector((state) => state.language.language);

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);

    return(
        <footer>
            {location.pathname === "/" && props.isOnline ? 
            <div className='desktop-bg'>
                <div className='content-wrapper'>
                    <p className='header-lg'>{content.footer.header}</p>
                    <form>
                        <input placeholder={content.footer.placeholder} type="email" id="email" name="email" />
                        <button type='submit'>
                            <ArrowLeft className='arrow-right-icon' />
                        </button>
                    </form>
                    <p className='paragraph'>{content.footer.notify}</p>
                </div>
            </div>
            : null}
            <div className='footer-bg'>
                {location.pathname === "/" || location.pathname === "/privacy-policy" ? 
                <Link className='footer-merchant paragraph' as={Link} to="/merchant">{content.footer.link}</Link>
                : null}
                <div>
                    <p className='paragraph'>© {new Date().getFullYear()} Tangle Offline | {content.footer.copyright} {screenSize.dynamicWidth > 576 ? "|" : null} <br /><br /><Link className='privacy' as={Link} to="privacy-policy">Policy</Link> | info@tangleoffline.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;