
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import React, { useState } from "react";
interface MapOptions {
  zoom: number;
  center: { lat: number; lng: number };
  disableDoubleClickZoom?: boolean;
}

const GoogleMapComponent = () => {
  

  return (
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5924.525434669994!2d77.58321815279649!3d12.912910748881398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158130171101%3A0x503aaedacd154bc3!2siVoyant%20Systems%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1702876638977!5m2!1sen!2sin"
    width="100%"
   
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  
      );
};

export default GoogleMapComponent;
