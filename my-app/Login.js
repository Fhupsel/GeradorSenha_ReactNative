import React, {Component} from 'react'
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class App extends Component {

    clicou = () => {
        alert.alert("Geredor de Senha Ativado");
    }

    render() {
        return (
            <view style={StyleSheet.container}>
                
                <Image
                    source={requeire('../assets/logo.png')}
                    style={StyleSheet.logo}
                />

                <TextInput 
                  style={StyleSheet.input}
                  placeholder="Digite seu email"
                  
                />
                 <TextInput
                  style={StyleSheet.input} 
                  secureTextEntry={true}
                  placeholder="Digite sua Senha"  
                
                />

                <TouchableOpacity
                  style={StyleSheet.botao}
                  onPress={ () => {this.clicou()} }
                >
                    <Text>Login</Text>
                </TouchableOpacity>

            </view>
        )
    }
}

const stles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alingItems: 'center',
        backgroundColor: '#fff'
    },

    logo: {
        with: 150,
        height: 150,
        borderRadius: 100
    },
    input:{
        marginTop: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize:16,
        fontWeight : 'bold',
        borderRadius: 3
    },
    botao: {
        width:300, 
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alingItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 100
    }

})