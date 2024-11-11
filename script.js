class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    IsMajor(UserToCompare) {
        return this.age > UserToCompare.age ? "l'età del primo è maggiore secondo" : "L'età del primo è minore del secondo";
    }
}
const davide = new User("Davide", "De Pasquale", "26", "Bisceglie");
const antonio = new User("Antonio", "Amormino", "29", "Palermo");
const cristian = new User("Cristian", "Petta", "28", "Roma");
const davidino = new User("Davidino", "Carletti", "50", "Taranto");
console.log(davide.IsMajor(antonio));
console.log(antonio.IsMajor(cristian));


class Pet {
    constructor(petName, ownerName, species = [], breed = []) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    isSameOwner(petToCompare) {
        return this.ownerName === petToCompare.ownerName;
        // ? ${this.ownerName} è uguale: "non è uguale";
    }
}

const Pet1 = new Pet("Birillo", "Cristian", "cane", "labrador");
const Pet2 = new Pet("Pazzo", "Antonio", "gatto", "soriano");
const Pet3 = new Pet("kiki", "Dario", "coniglio", "nano");
const Pet4 = new Pet("flaffy", "Antonio", "coniglio", "nano");

console.log(Pet2.isSameOwner(Pet4));
console.log(Pet1.isSameOwner(Pet3));


const petloop = [];

function aggPetList() {
    const petLista = document.getElementById("petLista");
    petLista.innerHTML = "";
    petloop.forEach((pet, index) => {
        const listePet = document.createElement("li");
        listePet.textContent = `Nome: ${pet.petName}, Proprietario:${pet.ownerName}, Specie:${pet.species}, Razza:${pet.breed}`;
        petLista.appendChild(listePet);
    });

}
document.getElementById("petForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const pName = document.getElementById("petName").value;
    const oName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const nuovoPet = new Pet(pName, oName, species, breed);
    petloop.push(nuovoPet);
    aggPetList();
    console.log(nuovoPet);
    document.getElementById("petForm").reset();

})
