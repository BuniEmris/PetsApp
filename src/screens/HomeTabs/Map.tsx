import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import MapView, {
  Camera,
  Marker,
  PROVIDER_GOOGLE,
  Callout,
} from "react-native-maps"; //
import Geolocation from "react-native-geolocation-service";
import CenteredIcon from "../../assets/icons/CenteredIcon";
import { RH, RW } from "../../utils/helpers/responsive";
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Map = () => {
  const [region, setRegion] = React.useState<any>(null);
  const mapRef = React.useRef<any>(null);
  const getCurrentLocation = async () => {
    const granted =
      Platform.OS === "android"
        ? await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Example App",
              message: "Example App access to your location ",
            },
          )
        : true;
    if (granted) {
      Geolocation.getCurrentPosition(
        (position) => {
          setRegion(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  console.log(region);
  // useEffect(() => {
  //   if (mapRef.current && region?.coords.latitude && region?.coords.longitude) {
  //     const newCamera: Camera = {
  //       center: {
  //         latitude: region?.coords.latitude,
  //         longitude: region?.coords.longitude,
  //       },
  //       zoom: 17,
  //       heading: 0,
  //       pitch: 0,
  //       altitude: 5,
  //     };

  //     mapRef.current.animateCamera(newCamera, { duration: 1000 });
  //   }
  // }, [region]);
  const handleCentred = () => {
    if (mapRef.current && region?.coords.latitude && region?.coords.longitude) {
      const newCamera: Camera = {
        center: {
          latitude: region?.coords.latitude,
          longitude: region?.coords.longitude,
        },
        zoom: 17,
        heading: 0,
        pitch: 0,
        altitude: 5,
      };

      mapRef.current.animateCamera(newCamera, { duration: 1000 });
    }
  };

  // const getStreetFromLocation = (latitude: number, longitude: number) => {
  //   Geocoder.geocodePosition({ lat: latitude, lng: longitude })
  //     .then((res: any) => {
  //       dispatch(
  //         setAddress({
  //           lat: latitude,
  //           lon: longitude,
  //           street: res[0]?.formattedAddress,
  //         }),
  //       );
  //     })

  //     .catch((err: any) => Alert.alert(err))
  //     .finally(() => setLoader(false));
  // };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: region?.coords.latitude || 37.78825,
          longitude: region?.coords.longitude || -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {region && (
          <Marker
            pinColor="#000"
            coordinate={{
              latitude: region?.coords.latitude,
              longitude: region?.coords.longitude,
            }}
            title={"address?.street"}
          />
        )}
      </MapView>
      <TouchableOpacity
        onPress={handleCentred}
        style={{
          width: RW(48),
          height: RW(48),
          position: "absolute",
          borderRadius: RW(24),
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          bottom: RH(304),
          right: RW(10),
        }}
      >
        <CenteredIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Map;
