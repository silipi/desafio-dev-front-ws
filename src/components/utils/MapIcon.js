import Leaflet from 'leaflet';
import mapMarkerImg from '../../images/map-pin-solid.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [34, 34],
  iconAnchor: [17, 34]
})

export default mapIcon;