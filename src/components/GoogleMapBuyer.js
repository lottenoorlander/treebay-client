import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { getMyTrees } from "../store/trees/actions";

const mapStyles = {
  width: "45vw",
  height: "100%"
};

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  componentDidMount() {
    this.props.dispatch(getMyTrees());
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{ lat: 52.388294, lng: 4.833039 }}
        >
          {this.props.yourTrees
            ? this.props.yourTrees.map(tree => (
                <Marker
                  title={`${tree.price} €/month`}
                  name={tree.type}
                  price={tree.price}
                  key={tree.id}
                  id={tree.id}
                  position={{ lat: tree.locationX, lng: tree.locationY }}
                  onClick={this.onMarkerClick}
                  icon={{
                    url:
                      "https://cdn0.iconfinder.com/data/icons/trees-19/50/11-512.png",
                    anchor: new window.google.maps.Point(16, 16),
                    scaledSize: new window.google.maps.Size(32, 32)
                  }}
                />
              ))
            : ""}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <a href={`/trees/${this.state.selectedPlace.id}`}>
                <h2>{this.state.selectedPlace.title}</h2>
              </a>
              <p>{this.state.selectedPlace.price} &#8364;/month</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { yourTrees: reduxState.trees.yourTrees };
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAOis1sZ9s2092YSGZ3EyeRnB0VWi3wzX0"
})(connect(mapStateToProps)(GoogleMap));
