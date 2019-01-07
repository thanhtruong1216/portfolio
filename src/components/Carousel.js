import React, { Component } from 'react';
import '../styles/Carousel.sass';
class Carousel extends Component {
  state = {
    currentImageIndex: 0
  }

  goToPreviousSlide = () => {
    this.setState({
      currentImageIndex: (this.state.currentImageIndex + this.props.imageUrls.length - 1) % this.props.imageUrls.length
    })
  }

  goToNextSlide = () => {
    this.setState({
      currentImageIndex: (this.state.currentImageIndex + 1) % this.props.imageUrls.length
    })
  }

  render() {
    const {imageUrls} = this.props;
    const {currentImageIndex} = this.state;
    return(
      <section className="carousel-container">
        <button onClick={this.goToPreviousSlide}></button>
        <CarouselItem url={imageUrls[currentImageIndex]} />
        <button onClick={this.goToNextSlide}></button>
      </section>
    );
  }
}

const CarouselItem = ({url}) => {
  return(
    <img src={url} />
  )
}

export default Carousel;