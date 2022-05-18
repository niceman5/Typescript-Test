"use strict";
// 
// key-value형식 선언
//
let dict = {
    "potato": "food",
    "1": "2"
};
console.log(dict);
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의음식");
const dict2 = new Dict();
dict2.add(kimchi);
dict2.def("kimchi");
console.log(dict2.def("kimchi"));
//# sourceMappingURL=005-etc%EB%8D%B0%EC%9D%B4%ED%84%B0_class.js.map