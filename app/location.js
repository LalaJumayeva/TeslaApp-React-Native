import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import map from '../assets/images/map.jpg';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const LocationScreen = () => {

    const [isPressed, setIsPressed] = useState(false);
    const router = useRouter();


    return (
        <>
            <View>
                <Image source={map} style={styles.map_img} />
                <Pressable onPress={() => router.back()} style={styles.backIcon}>
                    <Ionicons name="chevron-back-circle-sharp" size={50} color="#f5f3f4" />
                </Pressable>
                <View style={styles.bottomContainer}>
                    <View style={styles.container}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Text style={styles.title}>
                        Find your nearest charging car
                    </Text>
                    <Text style={styles.info}>
                        Helps you to find a place to charge a car near you at low price
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPressIn={() => setIsPressed(true)}
                            onPressOut={() => setIsPressed(false)}
                            style={[
                                styles.button,
                                { backgroundColor: isPressed ? 'gray' : 'white' },
                            ]}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    map_img: {
        width: "100%",
        height: "100%",
    },

    bottomContainer: {
        position: "absolute",
        zIndex: "5",
        backgroundColor: "#161a1d",
        bottom: 0,
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 28
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
        marginBottom: 20
    },

    title: {
        color: "white",
        fontSize: 22,
        fontWeight: 600
    },

    info: {
        color: "gray",
        fontSize: 18,
        paddingTop: 10
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

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

    button: {
        display: "flex",
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45,
        marginBottom: 10
    },

    buttonText: {
        fontSize: 20
    }
})

export default LocationScreen;