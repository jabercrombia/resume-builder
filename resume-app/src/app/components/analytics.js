// analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize('G-YN6P7D2Y7S'); 
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