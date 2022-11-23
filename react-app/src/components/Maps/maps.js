// import { useState, useEffect, useRef, useCallback } from "react";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px',
//   marginLeft: '100px'
// };

// const center = {
//   lat: 38.9072,
//   lng: -77.0369,
// };

// const Maps = ({ apiKey }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: apiKey,
//   });

//   const [map, setMap] = useState(null)
//   const onLoad = useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return (
//     <>
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         />
//         )}
//         <Location/>
//     </>
//   );
// };
// function Location() {
//   const [lat, setLat] = useState(43.68);
//   const [lng, setLng] = useState(-79.43);
//   const markerRef = useRef();

//   useEffect(() => {
//     if (!markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;
//     markerRef.current.setPosition({ lat, lng });

//   }, [lat, lng]);

//   return (
//     <div className="lat-lng">
//       <input
//         type="number"
//         value={lat}
//         onChange={(event) => setLat(parseFloat(event.target.value))}
//         step={0.01}
//       />
//       <input
//         type="number"
//         value={lng}
//         onChange={(event) => setLng(parseFloat(event.target.value))}
//         step={0.01}
//       />
//     </div>
//   );
// }
// export default Maps;
