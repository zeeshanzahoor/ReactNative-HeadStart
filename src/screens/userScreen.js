
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class UserScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>User Screen!</Text>
                {this.props.user &&
                    <Text style={styles.welcome}>{this.props.user.Name}</Text>
                }
                <Button onPress={() => this.props.setUser({ Name: 'Zeeshan Zahoor' })} title='Set User'></Button>
                <Button onPress={() => this.props.unsetUser()} title='Unset User'></Button>
            </View>
        );
    }

}
const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch({ type: 'SET_USER', payload: user }),
    unsetUser: () => dispatch({ type: 'UNSET_USER' })
})
export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)

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
