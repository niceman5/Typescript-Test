// 
// key-value형식 선언
//

type Words = {
    [key:string] : string
}
let dict : Words = {
    "potato" : "food",
    "1":"2"
}
console.log(dict)

class Dict {
    private words : Words
    constructor() {
        this.words = {}
    }    
    add(word:Word){
        if(this.words[word.term] === undefined )   {
            this.words[word.term] = word.def
        }
    }
    def(term:string) {
        return this.words[term]
    }
}
 
class Word {
    constructor(
        public term:string,
        public def:string
    ){}
}
 
const kimchi = new Word("kimchi", "한국의음식")
const dict2 = new Dict()
dict2.add(kimchi)
dict2.def("kimchi")
console.log(dict2.def("kimchi"))
