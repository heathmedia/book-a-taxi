import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

const gmkey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const center = {
    lat: 40.7128,
    lng: -74.0060
};

const containerStyle = {
    width: '400px',
    height: '400px'
}

export default function MapSelector({ setLocation }) {

    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: gmkey
    });

    const [map, setMap] = useState(null);

    const [marker, setMarker] = useState(null);

    const onMapClick = (e) => {
        const position = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }

        setMarker(position);
        setLocation(position);
    }

    if (!isLoaded) return <div>Loading map...</div>;

    return (
        <GoogleMap
            mapContainerClassName="w-full h-96 rounded-lg"
            zoom={10}
            center={center}
            onClick={(e) => onMapClick(e)}
            >{marker && <Marker position={marker} />}
        </GoogleMap>
    );
}

