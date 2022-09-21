import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const MapComponent = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform results into longitude-latitude object
  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)}
      mapStyle="mapbox://styles/giorgosmargaritis/cl8botqg1005z15s1nfo02ryt"
    >
      {searchResults.map((res) => {
        return (
          <Marker longitude={res.long} latitude={res.lat} key={res.lat}>
            <p className="animate-bounce cursor-pointer text-2xl">📌</p>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapComponent;
