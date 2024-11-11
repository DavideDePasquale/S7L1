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