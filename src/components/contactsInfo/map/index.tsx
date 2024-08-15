import React from "react";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";

import { GoogleApiKey } from "@/src/constants/utils";

export const Map = () => {
  const mapCoordinates = {
    lat: 41.3093479554046,
    lng: 69.27150505941223,
  };
  if (GoogleApiKey) {
    return (
      <APIProvider apiKey={GoogleApiKey}>
        <GoogleMap
          style={{ width: "100%", height: "100%" }}
          defaultCenter={mapCoordinates}
          defaultZoom={17}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker position={mapCoordinates} />
        </GoogleMap>
      </APIProvider>
    );
  } else {
    return <div></div>;
  }
};
