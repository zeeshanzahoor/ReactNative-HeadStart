
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class homeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Home Screen!</Text>
            </View>
        );
    }
}
export default homeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
