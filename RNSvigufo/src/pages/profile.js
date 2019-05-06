import React, { Component } from "react";

import { Text, Image, StyleSheet, AsyncStorage } from "react-native";

import jwt from "jwt-decode"

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/img/profile.png")}
        style={styles.tabNavigatorIconProfile}
      />
    )
  };
  constructor(props){
    super(props);
    this.state = {token: "", nome: ""};
  }

  _buscarDadosDoStorage = async() => {
    try{
      const value = await AsyncStorage.getItem("userToken");
      if(value !== null){
        this.setState({token: value});
        this.setState({ nome: jwt(value).Nome})
      }
    } catch{}
  };

  componentDidMount(){
    this._buscarDadosDoStorage();
  }

  render() {
    return <Text>{this.state.token}</Text>;
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconProfile: { width: 25, height: 25, tintColor: "#FFFFFF" }
});

export default Profile;
