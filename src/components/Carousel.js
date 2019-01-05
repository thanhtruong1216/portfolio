import React, { Component } from 'react';

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
      <section>
        <button onClick={this.goToPreviousSlide}>Previous</button>
        <CarouselItem url={imageUrls[currentImageIndex].image} />
        <button onClick={this.goToNextSlide}>Next</button>
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