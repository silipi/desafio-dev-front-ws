import React from 'react';
import PropTypes from 'prop-types';

import { Map as MapComponent, TileLayer, Marker } from 'react-leaflet';
import { MdPlace } from 'react-icons/md';
import mapIcon from './utils/MapIcon';

import '../styles/components/map.css';
import 'leaflet/dist/leaflet.css';

export default class Map extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props);

    this.state = {currentLocation: [-24.9841483, -53.423017]};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => 
        this.setState({
          currentLocation: [position.coords.latitude, position.coords.longitude]
        })
      )
    }
  }

  handleAddress = (data, isTitle) => {
    if (Array.isArray(data) && data.length > 0 && !isTitle) {
      return `${data[0].street}, ${data[0].number}, ${data[0].city} - ${data[0].uf}`
    } else if (Array.isArray(data) && data.length > 0 && isTitle) {
      return data[0].title
    }
  }
  
  render() {
    return (
      <div id="card-map">
        <div className="main-map">
          <MapComponent 
            center={this.state.currentLocation}
            zoom={15}
            style={{width: '100%', height: '100%'}}>
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2lsaXBpIiwiYSI6ImNrZzZtZnM2bDAxODYzNGxoeGRoN20za2sifQ.WvYajZARx97ye5JV5X3HUA`}/>
              <Marker position={[-24.9841483,-53.423017]} icon={mapIcon}></Marker>
          </MapComponent>
        </div>
  
        <div className="map-info">
          <MdPlace size={22} />
          <div>  
            <p>{this.handleAddress(this.props.data?.address, false)}</p>
            <span>{this.handleAddress(this.props.data?.address, true)}</span>
          </div>
        </div>
      </div>
    )
  }
}
