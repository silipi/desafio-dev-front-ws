import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Map as M, TileLayer, Marker } from 'react-leaflet';
import { MdPlace } from 'react-icons/md';
import mapIcon from './utils/MapIcon';

import '../styles/components/map.css';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [address, setAddress] = useState({}); 
  const [currentLocation, setCurrentLocation] = useState([-24.9841483, -53.423017]); 

  useEffect(() => {
    axios.get('db.json').then(res => {
      const addressData = res.data.customer.address;
      setAddress(addressData)
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => 
        setCurrentLocation([position.coords.latitude, position.coords.longitude])
      )
    }
  }, []);

  return (
    <div id="card-map">
      <div className="main-map">
        <M 
          center={currentLocation}
          zoom={15}
          style={{width: '100%', height: '100%'}}>
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2lsaXBpIiwiYSI6ImNrZzZtZnM2bDAxODYzNGxoeGRoN20za2sifQ.WvYajZARx97ye5JV5X3HUA`}/>
            <Marker position={[-24.9841483,-53.423017]} icon={mapIcon}></Marker>
        </M>
      </div>

      <div className="map-info">
        <MdPlace size={22} />
        <div>  
          <p>{`${address[0]?.street ?? "-"}, ${address[0]?.number ?? "-"}, ${address[0]?.city ?? "-"} - ${address[0]?.uf ?? "-"}`}</p>
          <span>{address[0]?.title ?? "-"}</span>
        </div>
      </div>
      
      
    </div>
  )
}
