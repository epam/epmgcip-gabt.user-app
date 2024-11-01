import React from "react";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";

import { GoogleApiKey } from "@/src/constants/utils";

interface ICoordinates {
  lat: number;
  lng: number;
}

export const Map: React.FC = () => {
  const mapCoordinates: ICoordinates = {
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
