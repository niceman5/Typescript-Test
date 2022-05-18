// javascript객체 선언하는 법
// var 객체이름 = new 생성자함수()
// 생성자함수만드는법
// var 함수이름 = function () {}
// 생성자함수 프로퍼티와 메소드만드는 법
// var 함수이름 = function() {
//     this.프로퍼티이름 = 값
//     this.메소드이름 =function() {}
// }
namespace recap006 {
    abstract class User {
        constructor(
            protected firstName :string,
            protected lastName:string,
            protected nickname:string
        ){}   
        //private으로 선언하면 상속받은 class에서 못씀
        public getFullName () {
            return `${this.lastName} ${this.firstName}`
        } 
        abstract getNickName():void     //추상메서드
    }   
    
    class Player extends User {
        getNickName() {
            console.log(this.firstName)
        }     
    }

    //단어 해시맵에서 사용할 데이터 형태
    // {
    //     "potato" : "food",
    //     "rice" : "Also food"
    // }    
    type Words = {
        [key:string] : string
    }

    let dict :Words = {
        "potato" : "food"
    }

    console.log(dict)
    class Dict {
        private words : Words
        //생성자는 있어야 함
        constructor() {
            this.words = {}     //수동으로 초기화 
        }
        add(word : Word){
            //주어진 단어가 사전에 존재하지 않음일때 undefined
            if(this.words[word.term] === undefined) {
                this.words[word.term] = word.def
            }
        }
        def(term:string) {
            return this.words[term]
        }
        static hello() {
            return "hello"
        }
    }
    //단어정의하거나 수정하는 메서드추가
    class Word {
        constructor(
            public term :string,
            public def :string
        ){           
        }
    }

    const kimchi = new Word("김치", "한국의 음식")
    const dict2 = new Dict() 
    dict2.add ( kimchi)
    console.log( dict2.def ("김치"))
    console.log(Dict.hello())       //class생성없지 직접 접근가능
}
