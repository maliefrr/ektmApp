import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';

const Ktm = (props) => {
  return (
    <View style={styles.cardContainer}>
        <ImageBackground source={require("../assets/ktm-bg.png")}>
    <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo-uho.png")} />
        <View>
            <Text style={styles.headerText}>Universitas Halu Oleo</Text>
            <Text style={styles.headerText}>Kartu Tanda Mahasiswa</Text>
        </View>
    </View>
    <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{ uri: `${props.image}` }} />
    </View>
    <View style={styles.biodataContainer}>
        <Text style={styles.biodataText}>{props.name}</Text>
        <Text style={styles.nim}>{props.nim}</Text>
        <Text style={styles.biodataText}>{props.prodi}</Text>
    </View>
    </ImageBackground>
</View>
  )
}

const cardWidth = 85 * 4;
const cardHeight = 54 * 4;
const { height } = Dimensions.get('window');
const vh = height / 100;


const styles = StyleSheet.create({
    cardContainer: {
        width: cardWidth,
        height: cardHeight,
        marginTop: 4 * vh,
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    profileContainer: {
        display: 'flex',
        justifyContent: "flex-end",
        flexDirection: 'row',
    },
    profileImage: {
        width: 60,
        height: 60,
        marginRight: 30
    },
    logo: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    nim: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    biodataContainer: {
        marginLeft: 20,
        maxWidth: 0.5 * cardWidth
    },
    biodataText: {
        fontSize: 15,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginLeft: 20,
        marginBottom: 6
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }
});

export default Ktm
