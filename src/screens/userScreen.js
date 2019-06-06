
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class userScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>User Screen!</Text>
                <Button onPress={this.props.setUser({ Name: 'Zeeshan Zahoor' })} title='Set User'></Button>
                <Button onPress={this.props.unsetUser()} title='Unset User'></Button>
            </View>
        );
    }
    mapStateToProps = state => ({
        user: state.user
    })

    mapDispatchToProps = dispatch => ({
        setUser: user => dispatch({ type: 'SET_USER', payload: user }),
        unsetUser: () => dispatch({ type: 'UNSET_USER' })
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(userScreen)

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
