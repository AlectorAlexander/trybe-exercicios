/* Exercício 1: Crie uma classe Car cujo objeto representará um carro.
Propriedades:
Deve conter uma propriedade do tipo string chamada brand que representa a marca.
Deve conter uma propriedade do tipo enum chamada color que representa a cor.
A cor pode ser: preta, branca, vermelha ou prata.
Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
Comportamentos:
Deve possuir um método chamado honk que aciona a buzina do carro.
Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
Deve possuir um método chamado turnOn que liga o carro.
Deve possuir um método chamado turnOff que desliga o carro.
Deve possuir um método chamado speedUp que acelera o carro.
Deve possuir um método chamado speedDown que reduz a velocidade do carro.
Deve possuir um método chamado stop que para o carro.
Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro. */

enum Color {
    yellow = "Amarelo",
    green = "verde",
    rosa = "Pink",
    Orange = "Laranja",
    Purple = "Purpurina",
    Black = "Preto",
    Silver = "Prata",
    blue = "Azul",
}

enum Door {
    porta1 = "Motorista",
    porta2 ="Passageiro Da Frente",
    porta3 ="Passageiro de trás esquerdo",
    porta4 ="Passageiro de trás direito"
}

enum TurnOn {
    one = "ligado",
    two ="desligado"
}

enum Speed {
    one = "acelarando",
    two = "desacelarando"
}

enum Turn {
    one = "esquerda",
    two = "direita"
}

class Car {
    brand: string;
    color: Color;
    doors: number;

    constructor(brand: string, color: Color, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): void {
        console.log('BiBi')
    }

    openTheDoor(door: Door): void {
        console.log(`Abrinda a porta do ${door}`)
    }
    closeTheDoor(door: Door): void {
        console.log(`Fechando a porta do ${door}`)
    }
    turnOn(turn: TurnOn): void {
        console.log(`O carro está ${turn}`)
    }
    speed(speed: Speed): void {
        console.log(`O carro está ${speed}`)
    }
    stop(): void {
        console.log(`O carro parou`)
    }
    turn(metros: number,turn: Turn): void {
        console.log(`O carro vira para ${turn}, após ${metros} metros`)
    }
    
}

/* Exercício 2: Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:
Siga em frente;
Em 600 metros vire a esquerda;
Vire a esquerda;
Em 200 metros na rotatória pegue a segunda saída a direita;
Mantenha em frente pelos próximos 1,2 quilômetros;
Em 300 metros vire a direita;
Vire a direita;
Em 400 metros você chegará ao seu destino;
Você chegou ao seu destino.
Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.
Siga em frente;
Em 300 metros vire a direita;
Vire a direita;
Mantenha em frente pelos próximos 2 quilômetros;
Em 200 metros vire a esquerda;
Vire a esquerda;
Em 400 metros vire a direita;
Vire a direita;
Em 100 metros você chegará ao destino.
Você chegou ao destino.
A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.
Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito. */

const carro = new Car("Ford Fiesta", Color.blue, 4);

carro.openTheDoor(Door.porta1);
carro.closeTheDoor(Door.porta1);
carro.turnOn(TurnOn.one);
carro.speed(Speed.one);
carro.turn(600, Turn.two);
carro.turn(0, Turn.two);
carro.turn(200, Turn.one);
carro.turn(1500, Turn.one);
carro.turn(0, Turn.one);
carro.speed(Speed.one);
carro.speed(Speed.two);
carro.stop();
carro.openTheDoor(Door.porta3);
carro.closeTheDoor(Door.porta3);
carro.turn(300, Turn.one);
carro.turn(0, Turn.one);
carro.speed(Speed.one);
carro.turn(2300, Turn.two);
carro.turn(0, Turn.two);
carro.turn(400, Turn.one);
carro.speed(Speed.one);
carro.speed(Speed.two);
carro.stop();

/* Exercício 3: Crie uma interface que represente uma pizza. Ela deve conter:
Uma propriedade do tipo string chamada flavor que representa o sabor.
Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza.
O número de fatias pode ser 4, 6 ou 8;
Utilize um type alias para armazenar o tipo dessa propriedade.
a) Crie uma pizza sabor Calabresa de 8 fatias;
b) Crie uma pizza sabor Marguerita de 6 fatias;
c) Crie uma pizza sabor Nutela de 4 fatias. */

type Slices = 4 | 6 | 8

interface pizza {
    flavor: string;
    slices: Slices, 
}

const Calabresa: pizza = {
    flavor: "Calabreza",
    slices: 8
}

const Marguerita: pizza = {
    flavor: "Marguerita",
    slices: 6
}

const Nutella: pizza = {
    flavor: "Nutella",
    slices: 4
}
/* 
Exercício 4: Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:
Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizza.
Agora crie:
3 pizzas do tipo comum;
2 pizzas do tipo vegetariana;
1 pizza do tipo doce. */

type pizzaComum = "Calabresa" | "Frango" | "Pepperoni";
type pizzaVegetariana = "Marguerita" | "Palmito" | "Pepperoni";
type pizzaDoce = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

