import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Images from '../assets/images';
import { Campus } from '../data/campusesData';

interface MapProps {
  campuses: Campus[];
  hoveredCampus: string | null;
}

const DefaultIcon = L.icon({
  iconUrl: Images.locationPin.src,
  shadowUrl: Images.locationShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const HoveredIcon = L.icon({
  iconUrl: Images.locationPinTwoX.src,
  shadowUrl: Images.locationShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const Map: React.FC<MapProps> = ({ campuses, hoveredCampus }) => { 
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
    
  useEffect(() => {
    if (mapRef.current) {
      campuses.forEach((campus) => {
        const marker = markersRef.current[campus.name];
        if (marker) {
          marker.setIcon(hoveredCampus === campus.name ? HoveredIcon : DefaultIcon);
        }
      });
    }
  }, [hoveredCampus, campuses]);

  
  return (
    <MapContainer 
      center={[39.8283, -98.5795]}
      zoom={4} 
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {campuses.map((campus, index) => (
        <Marker 
          key={index} 
          position={campus.coords}
          icon={hoveredCampus === campus.name ? HoveredIcon : DefaultIcon}
          ref={(ref) => {
            if (ref) {
              markersRef.current[campus.name] = ref;
            }
          }}
        >
          <Popup>
            <strong>{campus.name}</strong><br />
            {campus.uni}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default Map;