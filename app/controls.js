import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import charging from '../assets/images/charging.jpg';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Controls = () => {

    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <Pressable onPress={() => router.back()} style={styles.backIcon}>
                <Ionicons name="chevron-back-circle-sharp" size={50} color="#f5f3f4" />
            </Pressable>
            <View style={styles.notif}>
                <View style={styles.notificationBar}>
                    <Ionicons name="battery-charging" size={24} color="white" />
                    <View style={styles.notifText}>
                        <Text style={styles.title}>Tesla SuperCharger</Text>
                        <Text style={styles.text}>
                            Centralia, WA, United States
                        </Text>
                    </View>
                    <Ionicons name="ios-alert-circle" size={24} color="white" />
                </View>
            </View>
            <View style={styles.carCharging}>
                <Image source={charging} style={styles.car} />
            </View>
            <View>
                <View style={styles.percent}>
                    <Text style={styles.textCharging}>Charging</Text>
                    <Text style={styles.textCharging}>75%</Text>
                </View>
                <View style={styles.fast}>
                    <View style={styles.fastCharging}>
                        <Ionicons name="flash" size={24} color="green" />
                        <Text style={styles.fastChargingText}>
                            Fast Charging
                        </Text>
                    </View>
                    <Text style={styles.distanceText}>127 mil remaining distance</Text>
                </View>
                <View style={styles.ct}>
                    <View style={styles.chargeTime}>
                        <View style={styles.timeinfo}>
                            <Text style={styles.hour}>2h 45m</Text>
                            <Text style={styles.voltage}>Charge time ● 4.79 Voltage</Text>
                        </View>
                    </View>
                    <View style={styles.battery}>
                        <View style={styles.parent}>
                            <View style={styles.child}></View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "black",
        width: "100%",
        height: "100%"
    },

    backIcon: {
        position: "relative",
        left: 20,
        top: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },

    notif: {
        paddingHorizontal: 15,
        position: "relative",
        top: 55,
    },

    notificationBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1b4332",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15
    },

    title: {
        color: "#f7f7f2",
        fontSize: 23,
        fontWeight: 600,
        marginBottom: 10
    },
    text: {
        color: "gray",
        fontSize: 16
    },

    carCharging: {
        flex: 1,
        position: "relative",
        zIndex: -1,
        top: 80,

    },
    car: {
        width: "100%",
        height: 200,
    },

    percent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25
    },

    textCharging: {
        fontSize: 22,
        color: "#f7f7f2",
        fontWeight: 500
    },

    fastCharging: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    fast: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 22,
        marginTop: 11

    },

    fastChargingText: {
        marginLeft: 5,
        fontSize: 16,
        color: "green",
    },
    distanceText: {
        color: "gray",

    },
    ct: {
        paddingHorizontal: 18
    },

    chargeTime: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "#343a40",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 17
    },

    timeinfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    hour: {
        color: "#f7f7f2",
        fontSize: 25,
        fontWeight: 500
    },

    voltage: {
        color: "gray",

    },

    battery: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },

    parent: {
        width: "100%",
        height: 70,
        backgroundColor: "gray",
        borderRadius: 10
    },

    child: {
        width: "80%",
        height: 70,
        backgroundColor: "#38b000",
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    }

})


export default Controls;