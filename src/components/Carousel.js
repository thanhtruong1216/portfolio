import React, { Component } from 'react';
import '../styles/Carousel.sass';
import { Link } from 'react-router-dom';
class Carousel extends Component {
  state = {
    currentImageIndex: 0,
    clickImage: false
  }

  goToPreviousSlide = () => {
    this.goToSlide(this.state.currentImageIndex - 1);
  }

  goToNextSlide = () => {
    this.goToSlide(this.state.currentImageIndex + 1);
  }

  goToSlide = (i) => {
    const n = this.props.imageUrls.length;
    this.setState({
      currentImageIndex: (i + n) % n
    })
  }

  showImage = () => {
    this.setState({
      clickImage: true
    })
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    this.goToNextSlide();
  }

  render() {
    const { imageUrls, links } = this.props;
    const {currentImageIndex} = this.state;
    return(
      <section className="carousel-container">
        <div className="carousel-main-content">
          <button onClick={this.goToPreviousSlide}></button>
          <Link to={`/projects/${links[currentImageIndex]}`}>
            <CarouselItem url={imageUrls[currentImageIndex]}/>
          </Link>
          <button onClick={this.goToNextSlide}></button>
        </div>
        <Indicator imageUrls={imageUrls} currentImageIndex={currentImageIndex} goToSlide={this.goToSlide}/>
      </section>
    );
  }
}

const CarouselItem = ({url}) => {
  return(
    <img src={url} />
  )
}

const Indicator = ({imageUrls, currentImageIndex, goToSlide}) => {
  const indi = imageUrls.map((image, index) => {
    const classes = index === currentImageIndex ? 'circle circle-active' : 'circle';
    return(
      <img key={index} src={image} className={classes} onClick={() => goToSlide(index)}/>
    )
  })
  return indi;
}

export default Carousel;