"use strict";
// javascript객체 선언하는 법
// var 객체이름 = new 생성자함수()
// 생성자함수만드는법
// var 함수이름 = function () {}
// 생성자함수 프로퍼티와 메소드만드는 법
// var 함수이름 = function() {
//     this.프로퍼티이름 = 값
//     this.메소드이름 =function() {}
// }
var recap006;
(function (recap006) {
    class User {
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
    class Player extends User {
        getNickName() {
            console.log(this.firstName);
        }
    }
    let dict = {
        "potato": "food"
    };
    console.log(dict);
    class Dict {
        //생성자는 있어야 함
        constructor() {
            this.words = {}; //수동으로 초기화 
        }
        add(word) {
            //주어진 단어가 사전에 존재하지 않음일때 undefined
            if (this.words[word.term] === undefined) {
                this.words[word.term] = word.def;
            }
        }
        def(term) {
            return this.words[term];
        }
        static hello() {
            return "hello";
        }
    }
    //단어정의하거나 수정하는 메서드추가
    class Word {
        constructor(term, def) {
            this.term = term;
            this.def = def;
        }
    }
    const kimchi = new Word("김치", "한국의 음식");
    const dict2 = new Dict();
    dict2.add(kimchi);
    console.log(dict2.def("김치"));
    console.log(Dict.hello()); //class생성없지 직접 접근가능
})(recap006 || (recap006 = {}));
//# sourceMappingURL=006-recap.js.map