import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/mapMarker.svg';

import '../styles/pages/orphanagesMap.css';

function OrphanagesMap() {
	return (
		<div id='page-orphanages-map'>
			<aside>
				<header>
					<img src={mapMarker} alt='Happy' />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Ituiutaba</strong>
					<span>Minas Gerais</span>
				</footer>
			</aside>

			<Map
				center={[-18.9817184, -49.4598181]}
				zoom={14}
				style={{
					width: '100%',
					height: '100%',
				}}
			>
				<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			</Map>

			<Link to='' className='create-orphanage'>
				<FiPlus size={32} color='#fff' />
			</Link>
		</div>
	);
}

export default OrphanagesMap;
