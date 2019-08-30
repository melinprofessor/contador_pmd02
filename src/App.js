import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    //O state serve para armazenar o estado da variavel
    // naquele momento
    this.state = {contador: 0};
  }

  // Criou-se um metodo para o evento de toque
  // Vai ser chamado toda vez que tocar no botão
  onPress = acao => {
    if (acao === '+') {
      // O setState é utilizado para atribuir valor
      // a variavel de estado anteriormente criada
      this.setState({
        contador: this.state.contador + 1,
      });
    } else {
      this.setState({
        contador: this.state.contador - 1,
      });
    }
  };

  // O metodo render exibir visualmente o conteudo na tela
  render() {
    return (
      // View contem todos os nossos componentes utilizados
      // E que foram importados do react-native
      <View>
        {/**  TouchableOpacity é responsavel por adicionar uma area de click
        Todo vez que é tocado o evento onPress é acionado chamando o metodo
        que foi criado para incrementou ou decrementar o valor
         */}
        <TouchableOpacity
          onPress={() => {
            this.onPress('+');
          }}
          activeOpacity={1}
          style={estilo.botao}>
          <Text style={estilo.descricao}>+</Text>
        </TouchableOpacity>
        <Text style={estilo.contador}>
          {this.state.contador !== 0 ? this.state.contador : 0}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.onPress('-');
          }}
          style={estilo.botao}>
          <Text style={estilo.descricao}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


// Responsável por criar os elementos de estilização
const estilo = StyleSheet.create({
  botao: {
    padding: 10,
    backgroundColor: '#DDD',
  },
  descricao: {
    textAlign: 'center',
    fontSize: 30,
  },
  contador: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center',
  },
});
