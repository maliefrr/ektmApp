import React,{ useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const DashboardScreen = ({route}) => {
    const {name,nim,prodi,image} = route.params;
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleModal = () => {
        setIsVisible(!isVisible);
    }
    const url = `https://ektm.netlify.app/profile/${nim}`
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#4569e8', '#43cacb']} style={styles.gradient} />
            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={{ uri: `${image}` }} />
                <Text style={styles.profileName}>{name}</Text>
            </View>
            <View style={styles.biodataContainer}>
                <Text style={styles.biodataText}>NIM: {nim}</Text>
                <Text style={styles.biodataText}>Program Studi: {prodi}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        backgroundColor: "white"
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    biodataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    biodataText: {
        fontSize: 16,
        marginVertical: 5,
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
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default DashboardScreen;
