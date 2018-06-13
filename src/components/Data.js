const width = '200px';
const height = '200px';
const margin = '20px';
const data = {
  skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
  projects: [
    {
      id: 1,
      name: 'readable',
      link: 'readable',
      styles: {
        margin: margin,
        width: width,
        height: height,
        background: 'linear-gradient(#76b852,#8DC26F)'
      },
      skills: ['Redux','Fetch API', 'Babel', 'Webpack', 'NPM', 'Git' ]
    },
    {
      id: 2,
      name: 'memory game',
      link: "memorygame",
      styles: {
        margin: margin,
        width: width,
        height: height,
        background: 'linear-gradient(0.15turn, #00c6ff, #0072ff)'
      },
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 3,
      name: 'book tracking app',
      link: 'booktracking',
      styles: {
        margin: margin,
        width: width,
        height: height,
        background: 'linear-gradient(0.15turn, #ff0084, #33001b)'
      },
      skills: ['React', 'HTML', 'CSS', 'ES6 JavaScript', 'Asynchronous JavaScript', 'Fetch API', 'Babel', 'Webpack' ]
    },
    {
      id: 4,
      name: 'neighborhood map',
      link: 'neighborhoodmap',
      styles: {
        margin: margin,
        width: width,
        height: height,
        background: 'linear-gradient(#43cea2, #185a9d)'
      },
      skills: ['React', 'FourSquare API', 'Fetch API', 'Babel', 'NPM', 'Git' ]
    },
    {
      id: 5,
      name: 'mobile flashcard',
      link: 'mobileflashcard',
      styles: {
        margin: margin,
        width: width,
        height: height,
        background: 'linear-gradient(0.15turn, #ec6f66, #f3a183)'
      },
      skills: ['React Native', 'NPM', 'Babel', 'Expo', 'Git' ]
    }
  ]
}

export default data;