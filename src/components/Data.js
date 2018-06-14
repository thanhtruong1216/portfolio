import matching from '../images/memory.png';
import map from '../images/map.png';
import readable from '../images/readable.png';
import book from '../images/book.png';
import expo from '../images/expoo.jpg';
const data = {
  skills: ['HTML', 'CSS', 'ES6', 'React', 'Redux', 'Angular'],
  education: {
    school: [
      {
        degree: 'Bachelor of Laws',
        school: 'Can Tho University',
        year: '2009 - 2013',
        country: 'Viet Nam'
      }
    ],
    certificate: [
      {
        certificate: 'Intro programing nanodegree',
        school: 'Udacity',
        year: 2016,
        country: 'American'
      },
      {
        certificate: 'React Nanodegree programing',
        school: 'Udacity',
        year: 2017,
        country: 'American'
      },
      {
        certificate: 'Frontend developer nanodegree programing',
        school: 'Udacity',
        year: 2018,
        country: 'American'
      }
    ]
  },
  projects: [
    {
      id: 1,
      name: 'neighborhood map',
      link: 'neighborhoodmap',
      image: map,
      skills: ['React', 'FourSquare API', 'NPM', 'Git' ],
    },
    {
      id: 2,
      name: 'memory game',
      link: "memorygame",
      image: matching,
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 3,
      name: 'book tracking app',
      link: 'booktracking',
      image: book,
      skills: ['React', 'ES6', 'Fetch API', 'Babel' ]
    },
    {
      id: 4,
      name: 'mobile flashcard',
      link: 'mobileflashcard',
      image: expo,
      skills: ['React Native', 'Babel', 'Expo', 'Git' ],

    },
    {
      id: 5,
      name: 'readable',
      link: 'readable',
      image: readable,
      skills: ['Redux','Fetch API', 'Babel', 'Webpack']
    }
  ]
}

export default data;