import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  FontAwesome
} from '@expo/vector-icons';

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOptions";
import Controls from "../components/Controls"



export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={32} color="#f8f9fa" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* option items */}

      <FlatList
        data={menuOptions}
        showVerticalScrollIndicator={false}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161a1d",
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    color: "#f8f9fa",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#f8f9fa",
    fontWeight: "700",
    opacity: 0.7
  },
  image: {
    width: "100%",
    height: 250,
  }
});
