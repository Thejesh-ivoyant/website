
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React, { useState } from "react";
interface MapOptions {
  zoom: number;
  center: { lat: number; lng: number };
  disableDoubleClickZoom?: boolean;
}

const GoogleMapComponent = () => {
  const [center, setCenter] = useState<MapOptions["center"]>({ lat: 37.783333, lng: -122.416667 });

  const options: MapOptions = {
    zoom: 11,
    center,
    disableDoubleClickZoom: true,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyANOZzCbBoGsLJcXQYBfdEDOElNU0hxarU"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        options={options}
        onLoad={(map: google.maps.Map) => console.log("Map loaded: ", map)}
        onCenterChanged={(center: MapOptions["center"]) => setCenter(center)}
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;
