import React, {useState}from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function ListaCidades() {
  const [cidade, setCidade] = useState([
    { nome: "Aveiro", key: "1" },
    { nome: "Lisboa", key: "2" },
    { nome: "Madrid", key: "3" },
    { nome: "Paris", key: "4" },
    { nome: "Berlim", key: "5" },
    { nome: "Copenhaga", key: "6" },
    { nome: "Roma", key: "7" },
    { nome: "Londres", key: "8" },
    { nome: "Dublin", key: "9" },
    { nome: "Praga", key: "10" },
    { nome: "Viena", key: "11" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>

      {cidade.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 22,
    padding: 30,
    backgroundColor: "#87ceeb",
    fontSize:24,
  },
});

export default ListaCidades;
