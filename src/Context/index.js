import React, { createContext } from 'react';
const DataContext = createContext();
function Dataprovider({ children }) {
  const dataInitial = [{
    "id": 1,
    "title": "Expanding Cards",
    "src": "https://day-01-expandingcards.vercel.app/"
  },
  {
    "id": 2,
    "title": "Progress Steps",
    "src": "https://day-02-progress-steps.netlify.app/"
  },
  {
    "id": 3,
    "title": "Rotating Navigation",
    "src": "https://day-03-rotating-navigation.vercel.app/"
  },

  {
    "id": 4,
    "title": "Hidden Search",
    "src": "https://day-04-hidden-search.netlify.app/"
  },
  {
    "id": 5,
    "title": "Blurry Loading",
    "src": "https://day-05-blurry-loading.netlify.app/"
  },
  {
    "id": 6,
    "title": "Drag N Drop",
    "src": "https://day-06-drag-n-drop.netlify.app/"
  },

  {
    "id": 7,
    "title": "Auto Text Effect",
    "src": "https://day-07-auto-text-effect.netlify.app/"
  },
  {
    "id": 8,
    "title": "Hoverboard",
    "src": "https://day-08-hoverboard.netlify.app/"
  },
  {
    "id": 9,
    "title": "Scroll Animation",
    "src": "https://day-09-scroll-animation.netlify.app/"
  },
  {
    "id": 10,
    "title": "Form Input Wave",
    "src": "https://day-10-form-input-wave.netlify.app/"
  },
  {
    "id": 11,
    "title": "Dad jokes",
    "src": "https://day-11-dad-jokes.netlify.app/"
  },
  {
    "id": 12,
    "title": "Sound Board ",
    "src": "https://day-12-sound-board.netlify.app/"
  },
  {
    "id": 13,
    "title": "Live User Filter",
    "src": "https://day-13-live-user-filter.netlify.app/"
  },
  {
    "id": 14,
    "title": "Button Ripple Effect",
    "src": "https://day-14-button-ripple-effect.netlify.app/"
  },
  {
    "id": 15,
    "title": "Background Slider",
    "src": "https://day-15-background-slider.netlify.app/"
  },
  {
    "id": 16,
    "title": "Kinetic Loader",
    "src": "https://day-16-kinetic-loader.netlify.app/"
  },
  {
    "id": 17,
    "title": "Netflix Navigation Menu",
    "src": "https://day-17-netflix-navigation-menu.netlify.app/"
  },
  {
    "id": 18,
    "title": "Testimonial Box Switcher",
    "src": "https://day-18-testimonial-box-switcher.netlify.app/"
  },
  {
    "id": 19,
    "title": "Pokedex",
    "src": "https://day-19-pokedex.netlify.app/"
  },
  {
    "id": 20,
    "title": "Double Click Heart",
    "src": "https://day-20-double-click-heart.netlify.app/"
  },
  {
    "id": 21,
    "title": "Event Keycodes",
    "src": "https://day-21-event-keycodes.netlify.app/"
  },
  {
    "id": 22,
    "title": "Mobile Tab Navigation",
    "src": "https://day-22-mobile-tab-navigation.netlify.app/"
  },
  {
    "id": 23,
    "title": "Drink Water",
    "src": "https://day-23-drink-water.netlify.app/"
  },
  {
    "id": 24,
    "title": "Feedback UI Design",
    "src": "https://day-24-feedback-ui-design.netlify.app/"
  },
  {
    "id": 25,
    "title": "Github Profile",
    "src": "https://day-25-github-profiles.netlify.app/"
  },
  {
    "id": 26,
    "title": "Sticky Navigation",
    "src": "https://day-26-sticky-navigation.netlify.app/"
  },
  {
    "id": 27,
    "title": "Split Landing Page",
    "src": "https://day-27-split-landing-page.netlify.app/"
  },
  {
    "id": 28,
    "title": "Incrementing Counter",
    "src": "https://day-28-incrementing-counter.netlify.app/"
  },
  {
    "id": 29,
    "title": "Faq Collapse",
    "src": "https://day-29-faq-collapse.netlify.app/"
  },
  {
    "id": 30,
    "title": "Toast Notification",
    "src": "https://day-30-toast-notification.netlify.app/"
  }];
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <DataContext.Provider value={{
      dataInitial,
      searchValue,
      setSearchValue
    }}>
      {children}
    </DataContext.Provider >
  )
}

export { DataContext, Dataprovider };
