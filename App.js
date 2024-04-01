import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.centralizar}>
        <Image style={styles.logo} source={require('./assets/nubank.png')}></Image>
      </View>

      <View style={styles.geral}>
        <Text style={styles.nomeUsuario}>Olá, Felipe Melo</Text>
        <TextInput style={styles.inputProcurar} placeholder='Procurar...' placeholderTextColor='#fff'></TextInput>

        <View style={styles.box1}>
            <Text style={styles.titulo}>Cartão de crédito</Text>
            <Text>Fatura</Text>
            <Text style={styles.valorCartao}>R$ 1.500,00</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.nomeBtn}>Pagar fatura</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <Text style={styles.titulo}>Conta</Text>
            <Text>Saldo disponivel</Text>
            <Text style={styles.valorConta}>R$ 300,00</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.nomeBtn}>Transferir</Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity style={styles.btnCartao}>
            <Text style={styles.btnMeusCartoes}>Meus cartões</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b03bb',
    paddingTop: 40
  },
  centralizar:{
    alignItems: 'center'
  },
  geral:{
    padding: 30, 
  },
  logo: {
    width: 120,
    height: 50
  },
  nomeUsuario:{
    color: '#fff',
    marginBottom: 15,
    fontSize: 18
  },
  inputProcurar: {
    marginBottom: 30,
    borderRadius: 10,
    height: 50,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#fff',
    
  },  
  box1: {
    backgroundColor: '#fff',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
  },
  box2: {
    backgroundColor: '#fff',
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  valorConta: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
    
  },
  valorCartao: {
    color: '#0099cc',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
  },
  botao: {
    borderRadius: 25,
    padding: 8,
    width: 150,
    alignItems: 'center',
    borderWidth: 2,
    borderColor:  '#8b03bb'
  },
  nomeBtn: {
    color: '#8b03bb',
    fontSize: 20
  },
  btnCartao: {
    backgroundColor: '#0099cc',
    borderRadius: 30,
    alignItems: 'center',
    padding: 15
  },
  btnMeusCartoes: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }

});