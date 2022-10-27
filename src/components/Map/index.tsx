import { MapContainer, Marker, TileLayer } from 'react-leaflet'

interface MapProps {
  places?: Place[]
}

interface Place {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, location }) => {
        const { latitude, longitude } = location

        return <Marker key={id} position={[latitude, longitude]} title={name} />
      })}
    </MapContainer>
  )
}

export default Map
