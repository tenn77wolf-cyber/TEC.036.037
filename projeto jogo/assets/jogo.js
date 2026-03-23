class Personagem {
    constructor(nome, titulo, hp, sanidade, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.sanidade = sanidade;
        this.energia = energia;
    }

    atacar(alvo, habilidade) {
        if (this.sanidade >= habilidade.custo && this.energia >= habilidade.energia) {
            alvo.hp -= habilidade.dano;
            if (alvo.hp < 0) alvo.hp = 0; // não deixar HP negativo

            if (habilidade.custo > 0) {
                this.sanidade -= habilidade.custo;
                if (this.sanidade < 0) this.sanidade = 0;
                this.energia += 50;
                if (this.energia > this.energiaMax) this.energia = this.energiaMax;
            }

            if (habilidade.energia > 0) {
                this.energia -= habilidade.energia;
                if (this.energia < 0) this.energia = 0;
            }

            return `${this.nome} usou ${habilidade.nome} causando ${habilidade.dano} de dano!`;
        } else {
            return `${this.nome} não tem sanidade ou energia suficiente para usar ${habilidade.nome}!`;
        }
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}


let hero = new Personagem("Guts", "Berserck", 950, 500, 0);
let boss = new Personagem("Griffith", "Falcão", 1200, 0, 100);


document.getElementById("nome-heroi").textContent = hero.nome;
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-heroi").textContent = `${hero.titulo}⚔️`;
document.getElementById("titulo-boss").textContent = `${boss.titulo}☠️`;


const atualizarInterface = (mensagem) => {
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("sanidade-heroi").value = hero.sanidade;
    document.getElementById("energia-heroi").value = hero.energia;

 n


let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "Atacar", 90, 0, 20),
    new Habilidade(2, "Skill", 100, 20, 0),
    new Habilidade(3, "Armadura", 150, 30, 100)
];

listaHabilidades.forEach(habilidade => {
    let btn = document.createElement("button");
    btn.innerText = habilidade.nome;
    btn.classList.add("btn", "btn-danger");
    container.appendChild(btn);

    btn.onclick = () => {
        
        let mensagemHeroi = hero.atacar(boss, habilidade);

       
        let habBoss = listaHabilidades[Math.floor(Math.random() * listaHabilidades.length)];
        let mensagemBoss = boss.atacar(hero, habBoss);

        atualizarInterface(`${mensagemHeroi} | ${mensagemBoss}`);
    };
});


atualizarInterface("O combate começou!");