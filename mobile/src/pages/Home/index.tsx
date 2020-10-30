import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const Home = () => {
	return (
		<React.Fragment>
			<View style={styles.container}>
				<View style={styles.mapContainer}>
					<MapView
						style={styles.map}
						initialRegion={{
							latitude: -18.9815146,
							longitude: -49.4364435,
							latitudeDelta: 0.014,
							longitudeDelta: 0.014,
						}}
					>
						<Marker
							coordinate={{
								latitude: -18.9815146,
								longitude: -49.4364435,
							}}
							style={styles.mapMarker}
							// onPress={() => handleNavigateToDetail(point.id)}
							// key={String(point.id)}
						/>
						{/* {points.map((point) => (
								<Marker
									coordinate={{
										latitude: point.latitude,
										longitude: point.longitude,
									}}
									style={styles.mapMarker}
									onPress={() => handleNavigateToDetail(point.id)}
									key={String(point.id)}
								>
									<View style={styles.mapMarkerContainer}>
										<Image
											source={{ uri: point.image_url }}
											style={styles.mapMarkerImage}
										/>
										<Text style={styles.mapMarkerTitle}>{point.name}</Text>
									</View>
								</Marker>
							))} */}
					</MapView>
				</View>
			</View>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingTop: 20,
	},

	mapContainer: {
		flex: 1,
		width: '100%',
		borderRadius: 10,
		overflow: 'hidden',
		marginTop: 16,
	},

	map: {
		width: '100%',
		height: '100%',
	},

	mapMarker: {
		width: 90,
		height: 80,
	},

	// mapMarkerContainer: {
	// 	width: 90,
	// 	height: 70,
	// 	backgroundColor: '#34CB79',
	// 	flexDirection: 'column',
	// 	borderRadius: 8,
	// 	overflow: 'hidden',
	// 	alignItems: 'center',
	// },

	// mapMarkerImage: {
	// 	width: 90,
	// 	height: 45,
	// 	resizeMode: 'cover',
	// },

	// mapMarkerTitle: {
	// 	flex: 1,
	// 	fontFamily: 'Roboto_400Regular',
	// 	color: '#FFF',
	// 	fontSize: 13,
	// 	lineHeight: 23,
	// },
});

export default Home;
