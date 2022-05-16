"use strict";
class PlayerClass {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
}
const nice41 = new PlayerClass("one", "two", "three");
//console.log(nice41.firstName)     //에러
console.log(nice41.nickname); //정상
class User1 {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    //private으로 선언하면 상속받은 class에서 못씀
    getFullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}
//상속
class Player41 extends User1 {
}
const nice42 = new Player41("one", "two", "three");
//console.log(nice42.firstName)     //에러
console.log(nice42.nickname); //정상
console.log(nice42.getFullName());
class User2 {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    //private으로 선언하면 상속받은 class에서 못씀
    getFullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}
class Player42 extends User2 {
    getNickName() {
        console.log(this.firstName);
    }
}
const nice43 = new Player42("one", "two", "three");
console.log('nice43.getFullName()');
console.log(nice43.getFullName());
nice43.getNickName();
//# sourceMappingURL=004-class%EA%B4%80%EB%A0%A8.js.map