import React from 'react';
import { View, StyleSheet } from 'react-native';

const Flexbox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redContainer}></View>   
            <View style={styles.greenContainer}></View>   
            <View style={styles.blueContainer}></View>   
        </View>
    );
};

export default Flexbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'spac-around', 
        alignItems: 'center', 
    },
    redContainer: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
    greenContainer: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
    },
    blueContainer: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
    },
});
