import {useRef, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView} from 'react-navigation';
import {getDistance, getPreciseDistance} from 'geolib';

export default function Map() {
  const mapRef = useRef(null);
  const [region1, setRegion1]=useState({
    latitude: 30.733266515745605,
    longitude: 76.75013650153862,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [region2, setRegion2]=useState({
    latitude: 30.733266515745605,
    longitude: 76.75013650153862,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [region, setRegion] = useState({
    latitude: 30.733266515745605,
    longitude: 76.75013650153862,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const office = {
    latitude: 30.7177753539004,
    longitude: 76.70128547639352,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goToOffice = () => {
    mapRef.current.animateToRegion(office, 3 * 1000);
  };
  const Distance = () => {
    var dis = getDistance(region1, region2);
    alert(`${dis / 1000} KM`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        ref={mapRef}
        followsUserLocation={true}
        showsCompass={true}
        style={styles.map}
        initialRegion={{
          latitude: 30.75,
          longitude: 76.75,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => setRegion(region)}>
        <Marker coordinate={region1} draggable onDragEnd={(e)=>setRegion1(e.nativeEvent.coordinate)}/>
        <Marker coordinate={region2} draggable onDragEnd={(e) => setRegion2(e.nativeEvent.coordinate)}/>
        <View>
          <Button onPress={() => goToOffice()} title="Go to Office" />
          <Button onPress={Distance} title="Distance" />
        </View>
        {/* <Text style={styles.text}>Current latitude{region.latitude}</Text>
      <Text style={styles.text}>Current longitude{region.longitude}</Text> */}
      </MapView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: 'lightblue',
  },
});
