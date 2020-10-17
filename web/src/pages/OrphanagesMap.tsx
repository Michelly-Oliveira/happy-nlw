import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../images/mapMarker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface OrphanageProps {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
}

function OrphanagesMap() {
	const [orphanages, setOrphanages] = useState<OrphanageProps[]>([]);

	useEffect(() => {
		api.get('orphanages').then((response) => setOrphanages(response.data));
	}, []);

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
				{orphanages.map((orphanage) => (
					<Marker
						icon={mapIcon}
						position={[orphanage.latitude, orphanage.longitude]}
					>
						<Popup
							closeButton={false}
							minWidth={240}
							maxWidth={2470}
							className='map-popup'
						>
							{orphanage.name}
							<Link to={`orphanages/${orphanage.id}`}>
								<FiArrowRight size={32} color='#fff' />
							</Link>
						</Popup>
					</Marker>
				))}

				<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			</Map>

			<Link to='orphanages/create' className='create-orphanage'>
				<FiPlus size={32} color='#fff' />
			</Link>
		</div>
	);
}

export default OrphanagesMap;
