let attack1 = document.querySelector("#alt1")
let attack2 = document.querySelector("#alt2")
let attack3 = document.querySelector("#alt3")
let attack4 = document.querySelector("#alt4")

class Pockemone {
    constructor(nom, initiative, pv, attack) {
        this.nom = nom,
            this.initiative = initiative,
            this.pv = pv;
        this.attack = attack;
    }

}

class Attacks {
    constructor(nom, damage, number) {
        this.nom = nom;
        this.damage = damage;
        this.number = number;
    }
}

let thunderbolt = new Attacks("thunderbolt", 90, 3);
let volt_tackle = new Attacks("volt_tackle", 120, 6);
let quick_attack = new Attacks("quick_attack", 40, 2);
let thunder = new Attacks("thunder", 100, 2);
let iron_tail = new Attacks("iron_tail", 60, 3);
let shock_wove = new Attacks("shock_wove", 110, 3);
let thunder_wove = new Attacks("thunder_wove", 0, 6);
let singnal_beam = new Attacks("singnal_beam", 75, 3);

let attkc1 = [thunder, volt_tackle, quick_attack, thunder_wove];
let attk2 = [thunder, iron_tail, shock_wove, singnal_beam];

let pickachu = new Pockemone("pickachu", 90, 590, attkc1)
let voltali = new Pockemone("voltali", 100, 550, attk2)



function combat(poke1, poke2) {
    let firstAttacker = poke1;
    let secondAttacker = poke2;


    if (poke1.initiative < poke2.initiative) {
        firstAttacker = poke2;
        secondAttacker = poke1;
    }

    console.log(firstAttacker)

    console.log(secondAttacker)

    attack1.addEventListener("click", () => {
        if (poke1.pv > 0 && poke2.pv > 0) {
            thunderbolt_attack(firstAttacker, secondAttacker);
        }
        else {
            alert(`${poke1.pv} ${poke2.pv}`)
        }


    })


    attack2.addEventListener("click", () => {
        if (poke1.pv > 0 && poke2.pv > 0) {
            volt_tackle_attack(firstAttacker, secondAttacker);
        }
        else {
            alert(`${poke1.pv} ${poke2.pv}`)
        }

    })


    attack3.addEventListener("click", () => {
        if (poke1.pv > 0 && poke2.pv > 0) {
            iron_tail_attack(firstAttacker)
        }
        else {
            alert(`${poke2.pv}`)
        }


      
    })


   



}


combat(pickachu, voltali);






// function des attack



const thunderbolt_attack = (attaquant, victime,) => {
    console.log("Attack: ", {
        attaquant,
        victime
    });

    let attack = attaquant.attack[0];
    const randomAttack = attaquant.attack[Math.round(Math.random() * attaquant.attack.length - 1)]
    if (randomAttack) {
        attack = randomAttack
    }
    victime.pv = victime.pv - attack.damage;


    console.log("victime pv: ", victime.pv);
}


// Cet objet attaque
const volt_tackle_attack = (attaquant, victime) => {
    let attack = attaquant.attack[1];

    victime.pv = victime.pv - attack.damage;
    attaquant.pv = attaquant.pv - victime.pv * 0.25
    console.log("victime pv: ", victime.pv, "attaquant pv : ", attaquant.pv);

}

const quick_attack_hh = (attaquant) => {

    let soin = attaquant.pv * 0.25;
    attaquant.pv += soin;
}

// Cet objet attaque

// Cet objet attaque
const iron_tail_attack = (victime) => {
    victime.pv = 0
}
