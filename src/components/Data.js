import matching from '../images/matching.png';
import map from '../images/map.png';
const width = '200px';
const height = '200px';
const margin = '20px';
const data = {
  skills: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Ruby on rails', 'Angular', 'Ember'],
  projects: [
    {
      id: 1,
      name: 'readable',
      link: 'readable',
      image: matching,
      styles: {},
      skills: ['Redux','Fetch API', 'Babel', 'Webpack', 'NPM', 'Git' ]
    },
    {
      id: 2,
      name: 'memory game',
      link: "memorygame",
      image: matching,
      styles: {},
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 3,
      name: 'book tracking app',
      link: 'booktracking',
      image: matching,
      styles: {},
      skills: ['React', 'HTML', 'CSS', 'ES6 JavaScript', 'Asynchronous JavaScript', 'Fetch API', 'Babel', 'Webpack' ]
    },
    {
      id: 4,
      name: 'neighborhood map',
      link: 'neighborhoodmap',
      image: map,
      skills: ['React', 'FourSquare API', 'Fetch API', 'Babel', 'NPM', 'Git' ]
    },
    {
      id: 5,
      name: 'mobile flashcard',
      link: 'mobileflashcard',
      image: matching,
      styles: {},
      skills: ['React Native', 'NPM', 'Babel', 'Expo', 'Git' ]
    }
  ]
}

export default data;