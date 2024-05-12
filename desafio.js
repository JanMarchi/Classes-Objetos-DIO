class Hero {
    constructor(name, age, type) {
        this.name = name || "Unknown";
        this.age = age || "Unknown";
        this.type = type;
    }

    attack() {
        let attackMessage;
        switch (this.type) {
            case "Warrior":
                attackMessage = "attacked using sword";
                break;
            case "Mage":
                attackMessage = "attacked using magic";
                break;
            case "Monk":
                attackMessage = "attacked using martial arts";
                break;
            case "Ninja":
                attackMessage = "attacked using shuriken";
                break;
            default:
                attackMessage = "has no specified attack method";
        }
        console.log(`${this.name} - ${this.age}, ${this.type}, ${attackMessage}\n`);
        console.log("------------------------------------------\n");
    }
}

let example = new Hero();
let data = new Hero("Aang", 12, "Monk");
let data1 = new Hero("Nagato", 35, "Ninja");
let data2 = new Hero("Sove", "Unknown", "Warrior");
let data3 = new Hero("Yennefer", 100, "Mage");

example.attack();
data.attack();
data1.attack();
data2.attack();
data3.attack();
