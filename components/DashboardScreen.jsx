import React,{ useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';


const DashboardScreen = ({route,navigation}) => {
    const {name,nim,prodi,image} = route.params;
    const [isVisible, setIsVisible] = useState(false);
    const url = `https://ektm.netlify.app/profile/${nim}`;
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require("../assets/logo-uho.png")} />
                    <View>
                        <Text style={styles.headerText}>Universitas Halu Oleo</Text>
                        <Text style={styles.headerText}>Kartu Tanda Mahasiswa</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={{ uri: `${image}` }} />
                </View>
                <View style={styles.biodataContainer}>
                    <Text style={styles.biodataText}>{name}</Text>
                    <Text style={styles.nim}>{nim}</Text>
                    <Text style={styles.biodataText}>{prodi}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setIsVisible(!isVisible)}>
                <Text style={styles.buttonTitle}>Show QR</Text>
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <QRCode value={url} size={200} />
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
    const cardWidth = 85 * 4;
    const cardHeight = 54 * 4;
    const { height } = Dimensions.get('window');
    const vh = height / 100;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    cardContainer: {
        width: cardWidth,
        height: cardHeight,
        marginTop: 4 * vh,
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
        marginTop: 3,
        marginLeft: 20,
        maxWidth: 0.5 * cardWidth
    },
    biodataText: {
        fontSize: 15,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    button: {
        width: '60%',
        backgroundColor: '#ec8213',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '50%'
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '70%',
        backgroundColor: '#ffffff',
        paddingTop: 50,
        paddingHorizontal: 20,
        
    },
    menuItem: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    logoutButton: {
        backgroundColor: '#ec8213',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 6
    },
    headerText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }
});

export default DashboardScreen;
