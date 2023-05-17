import { Text, View, StyleSheet, Pressable } from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons';
import { Link } from "expo-router";



const MenuOption = ({ item }) => {
    return (
        <Link href={item.href} asChild>
        <Pressable style={styles.options}>
            {/* Icon */}
            <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

            {/* text */}
            <Text style={styles.optionsText}>{item.name}</Text>

            {/* icon */}
            <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color="gray"
                style={{ marginLeft: 'auto' }}
            />
        </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    options: {
      paddingTop: 35,
      paddingBottom: 15,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    optionsText: {
      color: "#f8f9fa",
      paddingLeft: 15,
      fontSize: 19,
      opacity: 0.9,
      fontWeight: 500
    }
  });

  export default MenuOption;