import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { Icon } from "leaflet";

export default function Map({ ip }) {
  const mapRef = useRef(null);

  const customIcon = new Icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [35, 35],
  });

  useEffect(() => {
    if (ip && ip.length > 0 && mapRef.current) {
      const newPoint = ip[0].geocode;
      mapRef.current.setView(newPoint, 18);
    }
  }, [ip]);

  return (
    <section className="">
      <MapContainer
        zoomControl={false}
        ref={mapRef}
        center={[52.54012680771782, -0.2718966648685744]}
        zoom={15}
        fadeAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ip.map((marker, i) => (
          <Marker key={i} position={marker.geocode} icon={customIcon} />
        ))}
      </MapContainer>
    </section>
  );
}
