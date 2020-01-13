import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class GoogleMap extends Component {
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
                  key={tree.id}
                  position={{ lat: tree.locationX, lng: tree.locationY }}
                />
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
