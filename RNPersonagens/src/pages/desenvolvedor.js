import React, {Component} from "react"
import {View, Text, Image, StyleSheet} from "react-native"


class Desenvolvedor extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/img/euIcon.png")}
            style={styles.tabNavigatorIconDev}
          />
        )
      };
    render(){
        return(
            <View style={styles.main}>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainHeaderTitulo}>{"Desenvolvedor".toUpperCase()}</Text>
                </View>
                <View style={styles.mainImg}>
                    <Image source={require("../assets/img/eu.jpg")}
                        style={styles.devImg}/>
                </View>
                <View style={styles.mainText}>
                    <View style={styles.Text}>
                        <Text style={styles.devText}>Nome: Kevin Benevides</Text>
                        <Text style={styles.devText}>Idade: 17</Text>
                        {/* <Text style={styles.devText}>Caracteristicas: Jovem, SOLTEIRO(Me ajudem...), bonito(Brincadeira kkk), 
                            engraçado, inteligente(Queria ;( kkkk ) e sonhador.</Text> */}
                        <Text style={styles.devText}>Sobre: Desenvolvedor Full Stack, com experiencia em C# API, 
                            JavaScript(React e React-Native), SqlServer, HTML/CSS. 
                            Criador da empresa Bene Dev, a qual vem criando diversos softwares
                            que trazem mais praticidade ao dia a dia de quem o usa.</Text>
                    </View>
                </View>
            </View>
        )
    }
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

    mainImg:{
        justifyContent: "center",
        alignItems:"center"
    },

    devImg:{
        marginTop:10,
        width: 195, 
        height: 190, 
        borderRadius: 130
    },

    mainText:{
        justifyContent: "center",
        alignItems:"center",
        marginTop:10,
        marginBottom:30
        // marginLeft:30,    
    },

    Text:{
        backgroundColor:"#666",
        width:"90%",
        padding:10,
        borderRadius:10
    },

    devText:{
        marginTop:10,
        color:"white",
        fontSize:20
    },

    tabNavigatorIconDev: {
        width: 35,
        height: 35,
        // tintColor: "purple"
      }

})
export default Desenvolvedor