import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import climate from '../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';



const ClimateScreen = () => {
    const [temp, setTemp] = useState(68);
    const [off, on] = useState(false);
    const [active, setActive] = useState(true);
    const router = useRouter();


    return (<>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#161a1d" }}>
            <Image source={climate} style={styles.image} />
            <Pressable onPress={() => router.back()} style={styles.backIcon}>
                <Ionicons name="chevron-back-circle-sharp" size={50} color="#f5f3f4" />
            </Pressable>
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.temp}>Interior 75°F - Exterior 67°F</Text>
            <View style={styles.textArea}>
                <View style={styles.onOff}>
                    <MaterialCommunityIcons onPress={() => {
                        setActive(!active)
                    }} name="power" size={42} color={active ? "white" : "gray"} />
                    <Text style={styles.iconButtonText}>{active ? "On" : "Off"}</Text>
                </View>
                <View style={styles.currentTemp}>
                    <Pressable onPress={() => {
                        setTemp(temp - 1)
                    }}>
                        <Entypo name="chevron-left" size={30} color="gray" />
                    </Pressable>
                    <Text style={styles.temperatureText}>{temp}°</Text>
                    <Pressable onPress={() => {
                        setTemp(temp + 1)
                    }}>
                        <Entypo name="chevron-right" size={30} color="gray" />
                    </Pressable>
                </View>
                <View>
                    <MaterialCommunityIcons name="car-door" size={42} onPress={() => on(!off)} style={{
                        color: off ? "white" : "gray"
                    }} />
                    <Text style={styles.iconButtonText}>Vent</Text>
                </View>
            </View>
        </View>
    </>
    )
};


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        position: "relative",
        bottom: 4
    },
    backIcon: {
        position: "absolute",
        left: 20,
        top: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },

    bottomContainer: {
        position: "relative",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#161a1d",
        paddingBottom: 20
    },

    temp: {
        color: "#f8f9fa",
        fontSize: 15
    },

    textArea: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 5
    },
    onOff: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    currentTemp: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    temperatureText: {
        color: "white",
        fontSize: 35,
        paddingLeft: 15,
        paddingRight: 12
    },


    iconButtonText: {
        fontSize: 20,
        color: "white"
    }
})
export default ClimateScreen;