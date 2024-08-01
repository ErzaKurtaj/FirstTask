import './App.css';

import eventImage from './assets/images/eventImage.png';
import componentsImage from './assets/images/componentsImage.jpg';
import stateImage from './assets/images/stateImage.png';
import Header from './components/Header/Header';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description: 'Components are the fundamental building blocks of a React application. They are JavaScript functions or classes that optionally accept inputs (known as "props") and return React elements that describe how a section of the UI should appear.'
  },
  {
    title: 'State',
    image: stateImage,
    description: 'State is data that may change over the lifetime of a component. It is managed within the component (or possibly its children) and can be updated by calling the setState method.'
  },
  {
    title: 'Events',
    image: eventImage,
    description: 'Event handlers are added to React elements to respond to user interactions, such as clicks, form submissions, or mouse movements.'
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt={concepts[1].title} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt={concepts[2].title} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
