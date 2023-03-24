import React,{ useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Ktm from './Ktm';
import QRCode from 'react-native-qrcode-svg';


const DashboardScreen = ({route,navigation}) => {
    const {name,nim,prodi,image} = route.params;
    const [isVisible, setIsVisible] = useState(false);
    const url = `https://ektm.netlify.app/profile/${nim}`;
    return (
        <View style={styles.container}>
            <Ktm name={name} nim={nim} image={image} prodi={prodi}/>
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
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff'
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

export default DashboardScreen;
