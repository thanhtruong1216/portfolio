import matching from '../images/memoryPicCarousel.png'
import map from '../images/map.png'
import book from '../images/book.png'
import expo from '../images/expoo.jpg'
import mepic from '../images/mepic.jpg'
import googleMapPic from '../images/goolemapPic.png'
import matchingGameCarousel from '../images/memoryPicCarousel.png'
import readablePhoto from '../images/readablePhotoNor.png'
import readablePhotoNor from '../images/readablePhotoNor.png'
import bookAppCarousel from '../images/bookAppCarousel.png'
import fbIcon from '../images/facebook-square.svg'
import github from '../images/github-square-brands.svg'
import linked from '../images/linkedin-brands.svg'
import phone from '../images/phone-square-alt-solid.svg'
import mail from '../images/envelope-solid.svg'

const data = {
  introduction: {
    avatar: mepic,
    name: 'trương thị hồ thanh',
    job: 'frontend web developer',
    language: 'English, Vietnamese',
    icon: 'far fa-user',
    location: 'Ho Chi Minh City, Viet Nam',
    desiredRole: 'Full Stack Web developer',
  },
  experiences: [
    {
      job: 'Television reporter',
      year: '2013-2016',
      location: 'Rach Gia City, Viet Nam',
      company: 'Kien Giang Radio and Television Station',
    },
    {
      job: 'Freelancer',
      year: '2017 - 2019',
      location: 'Ho Chi Minh City, Viet Nam',
      company: '',
    },
    {
      job: 'Full stack developer',
      year: '2019 - 2021',
      location: 'Ho Chi Minh City, Viet Nam',
      company: 'Golden Owl consulting',
    },
  ],
  locations: [
    {
      id: 1,
      title: 'I studied here for four years(2009-2013)',
      image: 'http://imgs.vietnamnet.vn/Images/2017/08/24/07/20170824075752-can-tho.jpg',
      address: '3/2 Street, Ninh Kieu District, Can Tho City',
      location: {
        lat: 10.030999,
        lng: 105.76879,
      },
    },
    {
      id: 2,
      title: 'I lived here for 3 years',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdxwl7wcQZoboWYr-u4O_xKry6ajsSX_T0Fk6Esh6YCwhMCI5',
      address: 'Nguyen Huu Tho Street, District 7, Ho Chi Minh City',
      location: {
        lat: 10.758334,
        lng: 106.672211,
      },
    },
    {
      id: 3,
      title: 'I worked here for three years(2013-2016)',
      image: 'http://kgtv.vn/wp-content/uploads/2015/07/dai-ptva-th-ghep-may-2015.jpg',
      address: '39 Dong Da Street, Vinh Lac Ward, Rach Gia City',
      location: {
        lat: 9.994949,
        lng: 105.095413,
      },
    },
    {
      id: 4,
      title: 'I live here currently',
      image: 'https://novaworldvietnam.com.vn/wp-content/uploads/2019/10/sunrise-riverside-nha-be.jpg',
      address: 'Sunrise Riverside Apartment, Nguyen Huu Tho Street, Nha Be District, HCMC',
      location: {
        lat: 10.723137,
        lng: 106.705771,
      },
    },
    {
      id: 5,
      title: 'I worked here for two years(2019-2021)',
      image: 'https://img.dothi.net//resize/640x380/2015/06/25/20150625083030-83b2.jpg',
      address: '538, Cach Mang Thang 8 Street, District 3, HCMC',
      location: {
        lat: 10.786123,
        lng: 106.667412,
      },
    },
  ],
  skills: [
    {
      name: 'html',
      id: 'html',
    },
    {
      name: 'css',
      id: 'css',
    },
    {
      name: 'javascript',
      id: 'javascript',
    },
    {
      name: 'react',
      id: 'react',
    },
  ],
  education: {
    school: [
      {
        degree: 'The Bachelor of Laws',
        school: 'Can Tho University',
        year: '2009 - 2013',
        country: 'Can Tho City, Viet Nam',
      },
    ],
    certificate: [
      {
        certificate: 'Intro to Programing Nanodegree',
        school: 'Udacity',
        year: 2016,
        link: 'https://confirm.udacity.com/GRPLLPHP',
      },
      {
        certificate: 'React Nanodegree Program',
        school: 'Udacity',
        year: 2017,
        link: 'https://confirm.udacity.com/VHV7ADUC',
      },
      {
        certificate: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        year: 2018,
        link: 'https://confirm.udacity.com/SGVCLHPC',
      },
    ],
  },
  projects: [
    {
      id: 1,
      name: 'neighborhood map',
      link: 'neighborhoodmap',
      urlGitHub: 'https://github.com/thanhtruong1216/react-map',
      urlHeroku: 'https://reactmapofthanh.herokuapp.com/',
      image: map,
      carouselImage: googleMapPic,
      skills: ['React', 'FourSquare API', 'NPM', 'Git'],
      description: {
        overview:
          'Project prerequisite: I need to know about Google map with Javascript before to build React map application. Besides that, I also have a knowledge about React and the relation between Javascipt with React.',
        technical: ['React', 'FourSquare API', 'NPM', 'Git', 'Babel', 'Webpack'],
        goal:
          'Develop a single page application featuring a map of my neighborhood I would like to visit. Add functionality to the map, including highlighted locations, provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load, using FourSquare APIs to provide information when a map marker or list view entry is clicked.',
      },
    },
    {
      id: 2,
      name: 'memory game',
      link: 'memorygame',
      urlGitHub: 'https://github.com/thanhtruong1216/memory-game',
      urlHeroku: 'https://memorygameofthanh.herokuapp.com/',
      image: matching,
      carouselImage: matchingGameCarousel,
      skills: ['HTML', 'CSS', 'Javascript'],
      description: {
        overview:
          'The Memory Game Project is all about demonstrating my mastery of HTML, CSS, and JavaScript. I built a complete browser-based card matching game (also known as Concentration).',
        technical: ['HTML', 'CSS', 'Javascript ES6'],
        goal:
          'The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!',
      },
    },
    {
      id: 3,
      name: 'book tracking app',
      link: 'booktracking',
      urlGitHub: 'https://github.com/thanhtruong1216/booksApp',
      urlHeroku: 'https://booktrackingofthanh.herokuapp.com/',
      image: bookAppCarousel,
      carouselImage: book,
      skills: ['React', 'ES6', 'Fetch API', 'Babel'],
      description: {
        overview:
          'In this project, I created a bookshelf app that allows users to select and categorize books they have read, are currently reading, or want to read.',
        technical: ['React', 'Javascript ES6', 'Fetch API', 'Babel', 'Git', 'Webpack'],
        goal:
          'The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as I interacted with the application.',
      },
    },
    {
      id: 4,
      name: 'mobile flashcard',
      link: 'mobileflashcard',
      urlGitHub: 'https://github.com/thanhtruong1216/thanhtruong-mobile-flashcard',
      urlHeroku: '',
      image: expo,
      carouselImage: expo,
      skills: ['React Native', 'Babel', 'Expo', 'Git'],
      description: {
        overview:
          'For the UdaciCards project, I built a mobile application (Android or iOS - or both) that allows users to study collections of flashcards.',
        technical: ['React Native', 'Babel', 'Expo', 'Git'],
        goal:
          'The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks. This project encompasses the fundamental aspects of building a native application, including handling infinite lists, routing, and user input. By building this project, I gain an understanding of how to use React Native to build an iOS and Android application.',
      },
    },
    {
      id: 5,
      name: 'readable',
      link: 'readable',
      urlGitHub: 'https://github.com/thanhtruong1216/readable',
      urlHeroku: '',
      image: readablePhotoNor,
      carouselImage: readablePhoto,
      skills: ['Redux', 'Fetch API', 'Babel', 'Webpack'],
      description: {
        overview:
          "For the Readable project, I built a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.",
        technical: ['Redux', 'Fetch API', 'Babel', 'Webpack', 'Git', 'Javascript ES6'],
        goal:
          'This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit. By building this project, I gain an understanding of how Redux can function in a standard type of application.',
      },
    },
  ],
  contact: [
    {
      link: 'tel:+84918858240',
      icon: phone,
    },
    {
      link: 'mailto:thanhtruong1216@gmail.com',
      icon: mail,
    },
    {
      link: 'https://www.linkedin.com/in/thanhtruong0312/',
      icon: linked,
    },
    {
      link: 'https://github.com/thanhtruong1216',
      icon: github,
    },
    {
      link: 'https://www.facebook.com/hthanh312',
      icon: fbIcon,
    },
  ],
}

export default data
