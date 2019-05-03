import React, { Component } from 'react'
import { Text, Image, StyleSheet } from 'react-native'

class Profile extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/profile.png")}
                style={styles.tabNavigatorIconHome}

            />
        )
    }
    render() {
        return (
            <Text>Profile</Text>
        )
    }
}
const styles = StyleSheet.create({
    tabNavigatorIconHome: { width: 25, height: 25, tintColor: "purple" }
});



export default Profile