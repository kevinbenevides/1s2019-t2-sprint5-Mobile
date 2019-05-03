import React, { Component } from "react";

import { Text, Image, StyleSheet, View, FlatList } from "react-native";

import api from "../services/api";

class Main extends Component {
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
        <View>
            <View style={styles.mainLista}>
                <Text>{item.nome}</Text>
                <Text>{item.lancamento}</Text>
                <Image style={{ width: 66, height: 58 }} source={{ uri: item.urlImagem }} />
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
        backgroundColor:"#666",
        borderColor:"black",
        marginTop: 5

    }
})

export default Main;