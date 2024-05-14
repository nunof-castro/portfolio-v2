'use client';
import { useEffect, useRef, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoibnVub2RlY2FzdHJvIiwiYSI6ImNsc2t2a3ozODA2amQyaW44M2trdmUwMngifQ.S08r_uwjgT8Nv199SVABKA';

export default function Globe() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-7.8536599);
  const [lat, setLat] = useState(39.557191);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/nunodecastro/clskvn1yf01bd01qlhgly5lhi',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
