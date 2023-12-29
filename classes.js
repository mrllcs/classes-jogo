// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = "Lucas";
      this.idade = 28;
      this.tipo = "mago";
    }
  
    atacar() {
      let ataque;
  
      // Selecionando o ataque com base no tipo
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibindo a mensagem de ataque
      console.log("O " + tipo + " atacou usando " + ataque);
    }
  }