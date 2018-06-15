import React, { Component } from 'react';
import '../App.css';
import styles from './StylesMap';
import '../styles/Map.css';
import locations from './Locations';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.mapDom = React.createRef();
    this.state = {
      locations: locations
    }
  }

  componentDidMount() {
    let interval;
    interval = setInterval(() => {
      /* global google */
      if(typeof google !== 'undefined' && typeof google.maps !== 'undefined' && typeof google.maps.Map !== 'undefined') {
        clearInterval(interval);
        this.initMap()
      }
    }, 1500)
  }

  initMap() {
    let mapConfigs = {
      center: { lat: 10.758334, lng: 106.672211 },
      zoom: 8,
      styles: styles,
      mapTypeControl: false
    };
    let mapDom = document.getElementById('map');
    this.bounds = new google.maps.LatLngBounds();
    this.map = new google.maps.Map(mapDom, mapConfigs);
    function makeMarkerIcon(markerColor) {
      let markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34));
      return markerImage;
    }
    let defaultIcon = makeMarkerIcon('0091ff');
    let highlightedIcon = makeMarkerIcon('FFFF24');
    for(let i = 0; i < this.state.locations.length; i++) {
      let location = this.state.locations[i]
      let position = location.location;
      let title = location.title;
      let marker = new google.maps.Marker({
        map: this.map,
        position: position,
        title: title,
        icon: defaultIcon,
        animation: google.maps.Animation.DROP,
      })
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });
  }
  }

  render() {
    return (
      <div className="map" id="map"></div>
    );
  }
}

export default GoogleMap;
