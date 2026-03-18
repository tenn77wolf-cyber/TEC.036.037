class Personagem{
    constructor(nome,titulo,hp,mana,energia){
    this.nome = nome;
    this.titulo = titulo;
    this.hp = hp;
    this.mana = mana;
    this.energia= energia;
}
atacar(alvo,habilidade){

}
}

class habilidade {
    constructor(id,nome,dano,custo,energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

let hero = new Personagem("Guts","Berserck",950,300,0);
let boss = new Personagem("Griffith","Falcão",1200,0,);

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

let container = document.getElementById("controles");
let listaHabilidades = [
    new habilidade(1, "Atacar", 90, 0, 20),
    new habilidade(2, "Skill", 100, 20, 0),
    new habilidade(3, "Armadura", 150, 30, 100)
];
listaHabilidades.forEach(habilidade => {
    let btn = document.createElement("button");
    btn.innerText = habilidade.nome;
    btn.classList.add("btn-primary", "btn-secondary", "btn-success");
    container.appendChild(btn);
});