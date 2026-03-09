class Carro {
  constructor(motor, freio, roda, velocidadeMax) {
    this.motor = motor;
    this.freio = freio;
    this.roda = roda;
    this.velocidadeMax = velocidadeMax;
  }

  acelerar() {
    console.log("O carro está acelerando...");
  }

  frear() {
    console.log("O carro está freando...");
  }

  fazerCurva() {
    console.log("O carro está fazendo uma curva...");
  }

  mostrarVelocidadeMax() {
    console.log("Velocidade máxima: " + this.velocidadeMax + " km/h");
  }
}



const porsche = new Carro("6 cilindros boxer", "Disco ventilado", "Liga leve", 330);
const ferrari = new Carro("V8", "Carbono-cerâmico", "Liga leve", 340);
const bmw = new Carro("6 cilindros em linha", "Disco ABS", "Liga leve", 250);
const koenigsegg = new Carro("V8 biturbo", "Carbono-cerâmico", "Fibra de carbono", 480);
const corvette = new Carro("V8", "Disco ventilado", "Liga leve", 312);



porsche.acelerar();
porsche.mostrarVelocidadeMax();

ferrari.acelerar();
ferrari.mostrarVelocidadeMax();

bmw.acelerar();
bmw.mostrarVelocidadeMax();

koenigsegg.acelerar();
koenigsegg.mostrarVelocidadeMax();

corvette.acelerar();
corvette.mostrarVelocidadeMax();