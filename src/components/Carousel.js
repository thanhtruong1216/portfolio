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

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    console.log('next');
    this.goToNextSlide();
  }

  render() {
    const {imageUrls} = this.props;
    const {currentImageIndex} = this.state;
    return(
      <section className="carousel-container">
        <div className="carousel-main-content">
          <button onClick={this.goToPreviousSlide}></button>
          <CarouselItem url={imageUrls[currentImageIndex]} />
          <button onClick={this.goToNextSlide}></button>
        </div>
        {/* <Indicator imageUrls={imageUrls} currentImageIndex={currentImageIndex}/> */}
      </section>
    );
  }
}

const CarouselItem = ({url}) => {
  return(
    <img src={url} />
  )
}

const Indicator = ({imageUrls, currentImageIndex}) => {
  const indi = imageUrls.map((image, index) => {
    if(index === currentImageIndex) {
      return(
        <img key={index} src={imageUrls[index]} className="circle circle-active" />
      )
    } else {
      return(
        <img key={index} src={imageUrls[index]} className="circle" />
      )
    }
  })
  return indi;
}

export default Carousel;