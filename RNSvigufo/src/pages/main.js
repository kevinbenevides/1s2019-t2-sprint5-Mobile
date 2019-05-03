import React, { Component } from 'react'
import { Text, Image, StyleSheet } from 'react-native'

class Main extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/calendar.png")}
                style={styles.tabNavigatorIconHome}

            />
        )
    }
    render() {
        return (
            <Text>Main</Text>
        )
    }
}
const styles = StyleSheet.create({
    tabNavigatorIconHome: { width: 25, height: 25, tintColor: "purple" }
});

export default Main