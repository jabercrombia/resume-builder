// analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID); 
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname});
};

export const buttonTracking = (buttonText) => {
  ReactGA.event({
    category: 'User',
    action: buttonText,
  });
};