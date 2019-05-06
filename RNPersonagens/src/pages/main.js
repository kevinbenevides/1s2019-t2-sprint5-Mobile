import React, { Component } from "react";

import { Text, Image, StyleSheet, View, FlatList } from "react-native";

import api from "../services/api";

class Main extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/img/superhero_ironman_comic_hero_icon-icons.com_69236.png")}
            style={styles.tabNavigatorIconHome}
          />
        )
      };

    constructor(props) {
        super(props);
        this.state = {
            listaPersonagens: []
        };
    }

    componentDidMount() {
        this.carregarPersonagens();
    }

    carregarPersonagens = async () => {
        const resposta = await api.get("/personagens");
        const dadosApi = resposta.data;
        this.setState({ listaPersonagens: dadosApi });
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainHeaderTitulo}>{"Personagens".toUpperCase()}</Text>
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={styles.mainLista}
                        data={this.state.listaPersonagens}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        );
    }
    renderizaItem = ({ item }) => (
        <View style={styles.mainLista}>
            <View style={styles.Lista}>
                <View style={styles.mainImg}>
                    <Image style={styles.listaImg} source={{ uri: item.urlImagem }} />
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.listaText}>{item.nome}</Text>
                    <Text style={styles.listaText}>{item.lancamento}</Text>                    
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    main: {
        display:"flex",
        backgroundColor: "#333",
        height:"100%"
    },
    
    mainHeader:{
        justifyContent: "center",
        alignItems: "center",
        height:"15%",
        backgroundColor:"#222"
    },

    mainHeaderTitulo:{
        color:"white",
    },

    mainLista:{
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10,
        marginBottom: 55,
    },

    Lista:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#666",
        padding:15,
        width:"80%",
        borderRadius:10,
    },

    mainImg:{
        justifyContent: "center",
        alignItems:"center"
    },

    listaImg:{
        marginTop:10,
        width: 195, 
        height: 190, 
        borderRadius: 130
    },

    mainText:{
        marginTop:10,
        marginLeft:30,
    },

    listaText:{
        color:"white",
        fontSize:20
    },

    tabNavigatorIconHome: {
        width: 35,
        height: 35,
        // tintColor: "purple"
        tintColor: "#FFFFFF"
      }
})

export default Main;