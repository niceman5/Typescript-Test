
class PlayerClass {
    constructor(
        private firstName :string,
        private lastName:string,
        public nickname:string
    ){}
}

const nice41 = new PlayerClass("one", "two","three");
//console.log(nice41.firstName)     //에러
console.log(nice41.nickname)     //정상



abstract class User1 {
    constructor(
        private firstName :string,
        private lastName:string,
        public nickname:string
    ){}   
    //private으로 선언하면 상속받은 class에서 못씀
    public getFullName () {
        return `${this.lastName} ${this.firstName}`
    }
}

//상속
class Player41 extends User1 {
}
 
const nice42 = new Player41("one", "two","three");
//console.log(nice42.firstName)     //에러
console.log(nice42.nickname)     //정상
console.log(nice42.getFullName())




abstract class User2 {
    constructor(
        protected firstName :string,
        protected lastName:string,
        protected nickname:string
    ){}   
    //private으로 선언하면 상속받은 class에서 못씀
    public getFullName () {
        return `${this.lastName} ${this.firstName}`
    } 
    abstract getNickName():void
}


class Player42 extends User2 {
    getNickName() {
        console.log(this.firstName)
    } 
}

const nice43 = new Player42("one", "two","three");
console.log('nice43.getFullName()')
console.log(nice43.getFullName())
nice43.getNickName()
