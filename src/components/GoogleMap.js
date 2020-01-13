import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import treeIcon from "../images/Greentree.svg";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
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
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 52.388294, lng: 4.833039 }}
        >
          {this.props.trees
            ? this.props.trees.map(tree => (
                <Marker
                  title={tree.type}
                  key={tree.id}
                  position={{ lat: tree.locationX, lng: tree.locationY }}
                  onClick={this.markerClick}
                  icon={{
                    url:
                      "https://cdn0.iconfinder.com/data/icons/trees-19/50/11-512.png",
                    anchor: new window.google.maps.Point(32, 32),
                    scaledSize: new window.google.maps.Size(64, 64)
                  }}
                />
                //  <InfoWindow
                //   marker={this.state.activeMarker}
                //   visible={this.state.showingInfoWindow}
                // >
                //  <div>
                //     <h1>{this.state.selectedPlace}</h1>
                //   </div>
                // </InfoWindow>
              ))
            : ""}
        </Map>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAOis1sZ9s2092YSGZ3EyeRnB0VWi3wzX0"
})(connect(mapStateToProps)(GoogleMap));
