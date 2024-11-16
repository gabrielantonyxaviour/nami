"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, HeatmapLayerF } from "@react-google-maps/api";
import { Disaster } from "@/lib/type";
import Image from "next/image";

type HeatmapData = google.maps.visualization.WeightedLocation;

const DisasterImpactMap: React.FC<{
  disasters: Disaster[];
  focusedCoordinates: { lat: number; lng: number };
  width?: string | number;
  height?: string | number;
}> = ({
  disasters,
  focusedCoordinates,
  width = "1000px",
  height = "400px",
}) => {
  const mapContainerStyle = {
    width,
    height,
  };

  const center = { lat: 35.6762, lng: 15.8917 };
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const mapRef = useRef<google.maps.Map>();

  const generateAreaPoints = (
    centerLat: number,
    centerLng: number,
    radius: number,
    points: number
  ) => {
    const result: HeatmapData[] = [];

    // Add center point with highest weight
    result.push({
      location: new google.maps.LatLng(centerLat, centerLng),
      weight: 10,
    });

    // Add surrounding points
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      const radiusVariation = radius * (0.3 + Math.random() * 0.4); // Reduced variation
      const lat = centerLat + radiusVariation * Math.cos(angle);
      const lng = centerLng + radiusVariation * Math.sin(angle);

      result.push({
        location: new google.maps.LatLng(lat, lng),
        weight: 5 + Math.random() * 3, // More consistent weights
      });
    }
    return result;
  };

  useEffect(() => {
    console.log("Focused COordinates");
    console.log(focusedCoordinates);
    if (mapRef.current) {
      mapRef.current.panTo(focusedCoordinates);
      mapRef.current.setZoom(10);
    }
  }, [focusedCoordinates]);

  const handleLoad = useCallback(() => {
    setIsGoogleLoaded(true);
    const points = disasters.flatMap((dis: Disaster) =>
      generateAreaPoints(dis.coordinates.lat, dis.coordinates.lng, 0.2, 20)
    );
    setHeatmapData(points);
  }, []);

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const heatmapOptions: google.maps.visualization.HeatmapLayerOptions = {
    radius: 15, // Reduced base radius
    opacity: 0.7,
    dissipating: true,
    maxIntensity: 15,
    gradient: [
      "rgba(0, 0, 0, 0)",
      "rgba(255, 255, 0, 0.5)",
      "rgba(255, 140, 0, 0.7)",
      "rgba(255, 0, 0, 0.8)",
      "rgba(139, 0, 0, 1)",
    ],
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      libraries={["visualization"]}
      onLoad={handleLoad}
      loadingElement={
        <div className="w-full flex justify-center">
          <Image src="/loading.gif" alt="loading" width={200} height={200} />
        </div>
      }
    >
      {isGoogleLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={3}
          center={center}
          onLoad={handleMapLoad}
          options={{
            mapTypeId: "terrain",
            minZoom: 2,
            maxZoom: 18,
            gestureHandling: "cooperative",
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
            styles: [
              {
                featureType: "all",
                elementType: "all",
                stylers: [{ saturation: 50 }, { gamma: 0.8 }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  { color: "#4fc3f7" },
                  { saturation: 40 },
                  { lightness: 20 },
                ],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [
                  { color: "#81c784" },
                  { saturation: 30 },
                  { lightness: 30 },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  { color: "#ff8a65" },
                  { visibility: "simplified" },
                  { lightness: 30 },
                ],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                  { color: "#ffcc80" },
                  { saturation: 20 },
                  { lightness: 40 },
                ],
              },
              {
                featureType: "administrative",
                elementType: "labels",
                stylers: [{ visibility: "simplified" }],
              },
              {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          <HeatmapLayerF data={heatmapData} options={heatmapOptions} />
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default DisasterImpactMap;
