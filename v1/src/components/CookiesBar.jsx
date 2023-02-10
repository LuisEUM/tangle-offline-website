import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allowAllCookies, showSettings } from "../redux/actions/cookieAction";
import "./cookies.scss"

const CookiesBar = () => {
    const dispatch = useDispatch();
    const accepted = useSelector(state => state.cookies.accepted);

    return(
        <div className="cookie-wrapper" style={accepted ? {display: "none"} : {}}>
            <p className="paragraph">We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. <Link to="/privacy-policy">Privacy Policy</Link></p>
            <div>
                <button className="accept-btn" onClick={() => dispatch(allowAllCookies())}>Accept</button>
                <button className="settings-btn" onClick={() => dispatch(showSettings(true))}>Settings</button>
            </div>
        </div>
    );
}

export default CookiesBar;