import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "@react-navigation/native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
let Api_Key = "6722aeee5400248423807b9efc183b6e";

export default function Weather({ lat, lon }) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${Api_Key}&units=metric`;

  const [city, setCity] = React.useState(null);
  const [state, setState] = React.useState(null);
  const [icon, setIcon] = React.useState(null);
  const [temp, setTemp] = React.useState("Loading ...");
  const [description, setDescription] = React.useState(null);
  const [maxTemp, setMaxTemp] = React.useState(null);
  const [minTemp, setMinTemp] = React.useState(null);
  const [sunrise, setSunrise] = React.useState(null);
  const [sunset, setSunset] = React.useState(null);
  const [feelslike, setFeelsLike] = React.useState(null);
  const [wind, setWind] = React.useState(null);
  const [humidity, setHumidity] = React.useState(null);
  const [pressure, setPessure] = React.useState(null);

  React.useEffect(() => {
    setTemp("Loading...");
    fetch(url)
      .then((data) => data.json())
      .then((weather) => {
        if (weather?.name && weather?.sys?.country) {
          setCity(weather.name);
          setState(weather?.sys?.country);
        } else setCity("Something went wrong");
        if (weather?.weather[0]?.icon && weather?.main?.temp) {
          setTemp(weather.main.temp);
          setIcon(weather.weather[0].icon);
        } else setTemp("Error");

        if (weather?.weather[0]?.description) {
          setDescription(weather.weather[0].description);
        } else setDescription("Error");
        if (weather?.main?.temp_max && weather?.main.temp_min) {
          setMaxTemp(weather.main.temp_max);
          setMinTemp(weather.main.temp_min);
        } else setMaxMin("Error");

        if (weather?.sys?.sunrise && weather?.sys.sunset) {
          setSunrise(new Date(weather.sys.sunrise * 1000).toLocaleDateString());
          setSunset(new Date(weather.sys.sunset * 1000).toLocaleDateString());
        } else setSunrise("Error");

        if (weather?.main?.feels_like) {
          setFeelsLike(weather.main.feels_like);
        } else setFeelsLike("Error");
        if (weather?.wind?.speed) {
          setWind(weather.wind.speed);
        } else setWind("Error");
        if (weather?.wind?.humidity) {
          setHumidity(weather.wind.humidity);
        } else setWind("Error");
        if (weather?.wind?.pressure) {
          setPessure(weather.wind.pressure);
        } else setWind("Error");
      });
  }, []);
  return (
    <>
      <Text style={styles.head}>Weather</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.city}>
          {city}, {state}{" "}
        </Text>
        <Image
          style={styles.icon}
          source={{ uri: "http://openweathermap.org/img/wn/${icon}@2x.png" }}
        />
        <View>
          <Text style={styles.temp}>{temp}ºC</Text>
        </View>
        <View>
          <Text style={styles.description}>
            {description}
            {"\n"}
          </Text>
        </View>
        <View style={styles.temp_sun}>
          <Text style={styles.max_min}>
            {minTemp}ºC {"<-Min Temp Max ->"} {maxTemp}ºC
          </Text>
          <View style={styles.sunIcon}>
            <MaterialCommunityIcons
              name="weather-sunset-up"
              size={50}
              color="#FFCA7C"
            />
            <MaterialCommunityIcons
              name="weather-sunset"
              size={50}
              color="#FAD6A5"
            />
          </View>
          <View style={styles.sun}>
            <Text style={styles.item}> Sunrise:{sunrise}</Text>
            <Text style={styles.item}> Sunset:{sunset}</Text>
          </View>
        </View>
        <View style={styles.weatherDetails}>
          <View style={styles.detailsCol}>
            <View style={styles.detailsRow}>
              <View style={styles.detailsBox}>
                <FontAwesome5 name="temperature-low" size={25} color="#f00" />
                <View style={styles.item}>
                  <Text>Real feel</Text>
                  <Text>{feelslike} ºC</Text>
                </View>
              </View>

              <View style={styles.detailsBox}>
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={30}
                  color="#f00"
                />
                <View style={styles.item}>
                  <Text>wind speed</Text>
                  <Text>{wind} m/s</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.detailsCol}>
            <View style={styles.detailsRow}>
              <View style={styles.detailsBox}>
                <MaterialCommunityIcons name="water" size={30} color="#f00" />
                <View style={styles.item}>
                  <Text>Hummidity</Text>
                  <Text>{humidity} hpa</Text>
                </View>
              </View>
              <View style={styles.detailsBox}>
                <MaterialCommunityIcons
                  name="speedometer"
                  size={30}
                  color="#f00"
                />
                <View style={styles.item}>
                  <Text>Pressure</Text>
                  <Text>{pressure} hpa</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 15,
  },
  head: {
    backgroundColor: "#000080",
    width: "100%",
    height: 50,
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  city: {
    padding: 10,
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
  temp: {
    fontSize: 50,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 15,
    textTransform: "capitalize",
    margin: 5,
    textAlign: "center",
    color: "#fff",
  },
  temp_sun: {
    backgroundColor: "#00BFF",
    padding: 14,
    borderRadius: 20,
    marginBottom: 25,
    color: "#fff",
    fontSize: 15,
  },
  max_min: {
    padding: 15,
    textAlign: "center",
    color: "#fff",
  },
  sunIcon: {
    marginTop: 20,
    flexDiretion: "row",
    justifyContent: "space-between",
  },
  sun: {
    flexDiretion: "row",
    justifyContent: "space-between",
  },
  weatherDetails: {
    backgroundColor: "#00BFF",
    padding: 10,
    borderRadius: 20,
    marginBottom: 50,
  },
  detailsCol: {
    flexDiretion: "row",
    alignItems: "center",
  },
  detailsRow: {
    flexDiretion: "row",
  },
  detailsBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    margin: 5,
    padding: 15,
    flexDiretion: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item:{
    color: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
