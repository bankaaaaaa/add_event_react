import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withStateHandlers } from "recompose"



const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const StyledMapWithAnInfoBox = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: props.lattitude, lng: props.longitude }}
  >
  <Marker
      position={{ lat: props.lattitude, lng: props.longitude }}
    >
      <InfoBox>
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Click to see date<br/>
            Event Name: {props.event}<br/>
            lattitude:{props.lattitude},
            longitude:{props.longitude}
          </div>
        </div>
      </InfoBox>
    </Marker>
    
    <Marker
      position={{ lat: props.lattitude, lng: props.longitude }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Date: {props.date}<br/>
            Event Name: {props.event}<br/>
            lattitude:{props.lattitude},
            longitude:{props.longitude}
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
);


class Maps extends Component{
  render(){
    return(
      <div>
        <StyledMapWithAnInfoBox
          googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key= AIzaSyCJ3eRLjWxeiUThvW3CkHX1_S4JBfxCJ2o "
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lattitude={parseFloat(this.props.lattitude)}
          longitude={parseFloat(this.props.longitude)}
          date={this.props.date}
          event={this.props.event}
        />
      </div>
    )
  }
}
export default Maps;