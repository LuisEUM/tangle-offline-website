import { useEffect, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Home from "./routes/Home";
import Merchant from "./routes/Merchant";
import Offline from "./routes/Offline";
import PageNotFound from "./routes/PageNotFound";
import CookieSettings from "./components/CookieSettings";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import CookiesBar from "./components/CookiesBar";

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("you are online");
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      console.log("The network connection has been lost.");
      setIsOnline(false);
    });
  }, []);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <NavigationBar />
      {isOnline ?
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="merchant" element={<Merchant />} />
        <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      :
      <Offline />
    }
      <Footer isOnline={isOnline} />
      {/* <CookieSettings />
      <CookiesBar /> */}
    </ThemeProvider>
  );
}

export default App;
