import React, { Component } from 'react';
import { Text,SafeAreaView,Platform,StatusBar,Image,ImageBackground,StyleSheet, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground  style={styles.backgroundImage} source={require('../assets/space.gif')}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>Star GAzer</Text>
                        </View>
                        <TouchableOpacity style={styles.routeCard} 
                            onPress={()=>{this.props.navigation.navigate('DailyPic')}}>
                            <Text style={styles.routeText}>DailyPic</Text>
                            <Image style={styles.iconImage} source={require('../assets/daily_pictures.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard}
                            onPress={()=>{this.props.navigation.navigate('SpaceCraft')}}>
                            <Text style={styles.routeText}>SpaceCrafts</Text>
                            <Image style={styles.iconImage} source={require('../assets/space_crafts.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard}
                            onPress={()=>{this.props.navigation.navigate('starMap')}}>
                            <Text style={styles.routeText}>StarMap</Text>
                            <Image style={styles.iconImage} source={require('../assets/star_map.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        alignSelf:"center",
        marginBottom:100,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        height:60,
        width:200,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 10,
        bottom: -15,
        zIndex: -3
    },
    bgDigit2: {
        position: "absolute",
        color: "rgba(170, 170, 170, 1)",
        fontSize: 150,
        right: 15,
        bottom: -15,
        zIndex: -2
    },
    bgDigit3: {
        position: "absolute",
        color: "rgba(120, 120, 120, 1)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 80,
        width: 80,
        resizeMode: "contain",
        right: 30,
        top: -50
    }
});