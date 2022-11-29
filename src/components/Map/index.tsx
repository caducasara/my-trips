import { useRouter } from 'next/router'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'

export interface MapProps {
  places?: Place[]
}

interface Place {
  id: string
  name: string
  slug: string
  isVisited: boolean
  location: {
    latitude: number
    longitude: number
  }
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="https://www.mapbox.com/">MapBox</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const MapConsumer = () => {
  const map = useMap()
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (width < 768) {
    map.setZoom(2)
    map.setMinZoom(2)
  }

  return null
}

const markerIcon = (isVisited: boolean) => {
  return new L.Icon({
    iconUrl: isVisited ? '/img/blue_marker.png' : '/img/red_marker.png',
    iconSize: isVisited ? [23, 30] : [30, 30],
    iconAnchor: [20, 20],
    popupAnchor: [0, -40]
  })
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      minZoom={3}
      maxBounds={[
        [-180, -180],
        [180, 180]
      ]}
      style={{ width: '100%', height: '100%' }}
    >
      <MapConsumer />
      <CustomTileLayer />
      {places?.map(({ id, slug, name, location, isVisited }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={id}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
            icon={markerIcon(isVisited)}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
