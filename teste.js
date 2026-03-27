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

            if (habilidade.custo > 0) {
                this.sanidade -= habilidade.custo;
                this.energia += 50; // Pode ajustar se quiser
            }

            if (habilidade.energia > 0) {
                this.energia -= habilidade.energia;
            }

            return `${this.nome} usou ${habilidade.nome}!`;
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

let hero = new Personagem("Guts", "Berserck", 950, 300, 0);
let boss = new Personagem("Griffith", "Falcão", 1200, 0, 100); // adicionei energia inicial ao boss

document.getElementById("nome-heroi").textContent = hero.nome;
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-heroi").textContent = `${hero.titulo}⚔️`;
document.getElementById("titulo-boss").textContent = `${boss.titulo}☠️`;

const atualizarInterface = (mensagem) => {
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("sanidade-heroi").value = hero.sanidade;
    document.getElementById("energia-heroi").value = hero.energia;

    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("sanidade-boss").value = boss.sanidade;
    document.getElementById("energia-boss").value = boss.energia;

    // opcional: mostrar mensagem de ataque
    console.log(mensagem);
};

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
        // Heroi ataca
        let mensagemHeroi = hero.atacar(boss, habilidade);
        
        // Boss ataca com habilidade aleatória
        let habBoss = listaHabilidades[Math.floor(Math.random() * listaHabilidades.length)];
        let mensagemBoss = boss.atacar(hero, habBoss);

        atualizarInterface(`${mensagemHeroi} | ${mensagemBoss}`);
    };
});




class Personagem {
    constructor(nome, titulo, hp, sanidade, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.sanidade = sanidade;
        this.energia = energia;
        this.energiaMax = 100; // adicionado
    }

    atacar(alvo, habilidade) {
        if (this.sanidade >= habilidade.custo && this.energia >= habilidade.energia) {
            alvo.hp -= habilidade.dano;

            if (alvo.hp < 0) alvo.hp = 0;

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

    boss_atacar(alvo) {
        if (this.energia > 1000) {
            alvo.hp -= 150;
            this.energia = 0;
            return `${this.nome} usou despedaçar`;
        } else {
            this.energia += 500;
            return `${this.nome} carregou a energia`;
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

// personagens
let hero = new Personagem("Guts", "Berserck", 950, 500, 0);
let boss = new Personagem("Griffith", "Falcão", 1200, 0, 100);

// interface inicial
document.getElementById("nome-heroi").textContent = hero.nome;
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-heroi").textContent = `${hero.titulo}⚔️`;
document.getElementById("titulo-boss").textContent = `${boss.titulo}☠️`;

const atualizarInterface = (mensagem) => {
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("sanidade-heroi").value = hero.sanidade;
    document.getElementById("energia-heroi").value = hero.energia;

    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("energia-boss").value = boss.energia;

    document.getElementById("msg-turno").innerHTML = mensagem;

    if (boss.hp <= 0) {
        document.getElementById("tela").innerHTML =
            `<div class="alert alert-success">Você venceu o Griffith!</div>`;
    }

    if (hero.hp <= 0) {
        document.getElementById("tela").innerHTML =
            `<div class="alert alert-danger">Você foi derrotado...</div>`;
    }
};

// habilidades
let container = document.getElementById("controles");

let listaHabilidades = [
    new Habilidade(1, "Braço de ferro", 30, 0, 10),
    new Habilidade(2, "Dragon Slayer", 60, 10, 0),
    new Habilidade(3, "Armadura Berserker", 150, 0, 90)
];

// botões
listaHabilidades.forEach(habilidade => {
    let btn = document.createElement("button");
    btn.innerText = habilidade.nome;

    btn.classList.add("btn", "btn-primary", "m-1"); // corrigido

    container.appendChild(btn);

    btn.onclick = () => {
        let mensagemHeroi = hero.atacar(boss, habilidade);
        let mensagemBoss = boss.boss_atacar(hero);

        atualizarInterface(`${mensagemHeroi} | ${mensagemBoss}`);
    };
});

// iniciar
atualizarInterface("O combate começou!");























class Personagem {
    constructor(nome, titulo, hp, sanidade, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.sanidade = sanidade;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        if (this.sanidade >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp -= habilidade.dano;
            if (habilidade.custo > 0) {
                this.sanidade -= habilidade.custo;
                this.energia += 50;
            }

            if (habilidade.energia > 0) {
                this.energia -= habilidade.energia;
            }

            return `${this.nome} usou ${habilidade.nome}!`;

        } else {
            return `${this.nome} não tem sanidade ou energia suficiente para usar ${habilidade.nome}!`;
        }
    }
}

class habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

let hero = new Personagem("Guts", "Berserck", 950, 300, 0);
let boss = new Personagem("Griffith", "Falcão", 1200, 0,);

document.getElementById("nome-heroi").textContent =
    `${hero.nome}`;

document.getElementById("nome-boss").textContent =
    `${boss.nome}`;

document.getElementById("titulo-heroi").textContent =
    `${hero.titulo}`;

document.getElementById("titulo-heroi").textContent =
    `${hero.titulo}⚔️`;

document.getElementById("titulo-boss").textContent =
    `${boss.titulo}☠️`;

const atualizarInterface = (mensagem) => {
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("sanidade-heroi").value = hero.sanidade;
    document.getElementById("energia-heroi").value = hero.energia;
};

let container = document.getElementById("controles");
let listaHabilidades = [
    new habilidade(1, "Atacar", 90, 0, 20),
    new habilidade(2, "Skill", 100, 20, 0),
    new habilidade(3, "Armadura", 150, 30, 100)
];
listaHabilidades.forEach(habilidade => {
    let btn = document.createElement("button");
    btn.innerText = habilidade.nome;
    btn.classList.add("btn", "btn-danger");
    container.appendChild(btn);
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab);
        atualizarInterface(mensagem);
        boss.atacar(hero,);
    };
});