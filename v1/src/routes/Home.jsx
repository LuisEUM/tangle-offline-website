import Button from 'react-bootstrap/Button'
import '../App.scss';
import { ReactComponent as AppleIcon } from '../resources/icons/appleIcon.svg'
import { ReactComponent as PlayIcon } from '../resources/icons/playIcon.svg'
import TangleLogo from '../resources/icons/tangleLogo.svg'
import Path from '../components/Path';
import CardCarousel from '../components/CardCarousel'
import SmallCard from '../components/SmallCard'
import VideoBox from "../components/VideoBox";

import ForestIcon from '../resources/icons/forestIcon.png';
import PeopleIcon from '../resources/icons/discountIcon.png';
import DiscountIcon from '../resources/icons/peopleIcon.png';

import Balloons from '../resources/backgrounds/balloons.jpeg';
import Castle from '../resources/backgrounds/castle.jpeg';
import Museum from '../resources/backgrounds/museum.jpeg';
import Restaurant from '../resources/backgrounds/restaurant.jpeg';
import Stadium from '../resources/backgrounds/stadium.jpeg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
    function importAll(r) {
        return r.keys().map(r);
    }

    const hoverTextRef = useRef();
    useEffect(() => {
        hoverTextRef.current.innerHTML = "Tangle Offline";
    }, []);

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
      
    const [displayHoverBox, setDisplayHoverBox] = useState(screenSize.dynamicWidth > 992 ? true : false);
    useEffect(() => {
        setDisplayHoverBox(screenSize.dynamicWidth > 992 ? true : false);
    }, [screenSize.dynamicWidth]);


    const activityCards = importAll(require.context('../resources/activity cards', false, /\.png$/));
    const content = useSelector((state) => state.language.language);

    const onHover = (text) => {
        hoverTextRef.current.innerHTML = text;
    }

    return(
        <>
            <div className='gradient'>
                <div className='hero-bg'>
                    <div className='hero-container'>
                        <img src={TangleLogo} alt="Tangle logo" className='tangle-logo' />
                        <h1>{content.home[0].hero[0].text}<br className='text-break' /> {content.home[0].hero[1].text}</h1>
                        <div className='download-wrapper'>
                            <div className='download-box download-box-left'>
                                <AppleIcon className='download-icon' />
                                <p className='paragraph'>{content.home[1].download}</p>
                            </div>
                            <div className='download-box download-box-right'>
                                <PlayIcon className='download-icon' />
                                <p className='paragraph'>{content.home[1].download}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Path />
            <div >
                <p className="header-lg">{content.inspirational.header[0].text}<br className="break" /> {content.inspirational.header[1].text}</p>
                <div className="layout">
                    <VideoBox url={content.inspirational.videoLink} />
                </div>
            </div>
            <div>
                <p className='header-lg'>{content.home[2].forStudents}</p>
                { screenSize.dynamicWidth < 768 ?
                <CardCarousel display={true} isPadding={true}>
                    <img className='card-image' src={activityCards[0]} alt="placeholder" />
                    <img className='card-image' src={activityCards[1]} alt="placeholder" />
                    <img className='card-image' src={activityCards[2]} alt="placeholder" />
                </CardCarousel>
                :
                <div className='card-bg'></div>
                }
            </div>
            <div className='container'>
                <p className='header-md'>{content.home[3].createJoin.name}</p>
                <div className='small-card-wrapper'>
                    <SmallCard image={ForestIcon} text={content.home[3].createJoin.description[0]} />
                    <SmallCard image={DiscountIcon} text={content.home[3].createJoin.description[1]} />
                    <SmallCard image={PeopleIcon} text={content.home[3].createJoin.description[2]} />
                </div>
            </div>
            <div className='merchant-wrapper'>
                <div className='hover-bgs' style={{display: `${displayHoverBox ? "block" : "none"}`}}>
                    <p ref={hoverTextRef} className='header-lg'></p>
                    <div className="background-images">
                        <div onMouseOver={() => onHover(`${content.home[4].merchant[0].name}`)}></div>
                        <div onMouseOver={() => onHover(`${content.home[4].merchant[1].name}`)}></div>
                        <div onMouseOver={() => onHover(`${content.home[4].merchant[2].name}`)}></div>
                        <div onMouseOver={() => onHover(`${content.home[4].merchant[3].name}`)}></div>
                        <div onMouseOver={() => onHover(`${content.home[4].merchant[4].name}`)}></div>
                    </div>
                </div>
                <CardCarousel display={!displayHoverBox} isPadding={false}>
                    <span className='thumb-wrapper'>
                        <img height={200} width={200} loading="lazy" title='merchant image' src={Restaurant} alt={content.home[4].merchant[0].name} />
                        <span className='thumb-text header-md'>{content.home[4].merchant[0].name}</span>
                    </span>
                    <span className='thumb-wrapper'>
                        <img height={200} width={200} loading="lazy" title='merchant image' src={Museum} alt={content.home[4].merchant[1].name} />
                        <span className='thumb-text header-md'>{content.home[4].merchant[1].name}</span>
                    </span>
                    <span className='thumb-wrapper'>
                        <img height={200} width={200} loading="lazy" title='merchant image' src={Balloons} alt={content.home[4].merchant[2].name} />
                        <span className='thumb-text header-md'>{content.home[4].merchant[2].name}</span>
                    </span>
                    <span className='thumb-wrapper'>
                        <img height={200} width={200} loading="lazy" title='merchant image' src={Castle} alt={content.home[4].merchant[3].name} />
                        <span className='thumb-text header-md'>{content.home[4].merchant[3].name}</span>
                    </span>
                    <span className='thumb-wrapper'>
                        <img height={200} width={200} loading="lazy" title='merchant image' src={Stadium} alt={content.home[4].merchant[4].name} />
                        <span className='thumb-text header-md'>{content.home[4].merchant[4].name}</span>
                    </span>
                </CardCarousel>

            </div>
            <div className='signup-wrapper'>
                <div className='signup-bg'></div>
                <div className={`${screenSize.dynamicWidth < 992 ? 'container' : ''}`}>
                    <p className='header-lg'>{content.home[5].signup.header}</p>
                    <p className='paragraph'>{content.home[5].signup.description}</p>
                    <Button className="signup-btn" as={Link} to='/merchant'>{content.home[5].signup.button}</Button>
                </div>
            </div>
            <div className='get-offline'>
                <p className='header-xl'>{content.home[6].getOffline}</p>
            </div>
        </>
    );
}

export default Home;