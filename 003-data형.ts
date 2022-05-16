/*
** 객체의 속성에 각각의 property가 있는지 체크 후에 값을 할당하고 있다. 
*/
function printProfile2(obj) {
    let name = "";
    let nation = "";
    name = obj.name ? "none" : obj.name;
    nation = obj.nation? "?" : obj.nation;
    console.log(name); //happy
  }
   
  /*
  * property를 매개변수에서 체크하면 좀 더 효율적인 코드가 될 수 있다.
  * default값 선언
  */
  function printProfile1({ name = "none", nation = "?" }) {
    console.log(name); //happy
  }


  let objType1  = {
      name :'aa',
      nation : null,
  }

//   console.log(objType1)
//   console.log(printProfile2(objType1))
//   console.log(printProfile1(objType1))

//함수의 call signature타입을 만듬
//함수의 형태를 정의하고 내용을 나중에 구현 c# interface와 비슷
//함수의 형태를 정의
type Add = (a:number, b:number) => number;
//실제 함수를 구현
const add2:Add = (a, b) => a+b; 
//구현한 함수 실행
console.log(add2(10, 10))  


// overloading (여러개의 call signature 가 있는 함수)
type Add_ORG = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}
const add3 : Add_ORG = (a, b) => {
    if(typeof b === "string")
        return a
    return a + b
}
console.log(add3(5, 20))
console.log(add3(5, '나나'))

type Config = {
    path : string,
    state : object
}
type Push = {
    (path:string) : void
    (config:Config):void
}
const push:Push=(config) => {
    if(typeof config === "string"){
        console.log(config)
    }        
    else {
        console.log(config.path)
    }    
}


//파리메터의 갯수와 형태틀릴때 한번헤 선언해서 사용
type Add_ORG2 = {
    (a:number, b:number) : number
    (a:number, b:number, c:number) : number
}
 
const add4 : Add_ORG2 = (a,b,c?:number) => {
    //c가 존재하면 a+b+c
    if(c) return a + b + c    
    return a+b    
}
 
console.log(add4(1,2))
console.log(add4(1,2,3))


/**
 * 다형성(polymorphism)
 * 
 * 퍼라메터 형태가 틀릴때 각각 구현하는게 아니라 generic으로 구현
 */
 type SuperPrint = {
    //(arr:number[]):void
    //(arr:boolean[]):void
    //(arr:string[]):void
    <T>(arr:T[]):void	//generic
}

const superPrint :SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}
 
superPrint([1,2,3,4])
superPrint([true, false, false])
superPrint(["a","b","c"])
superPrint([1,2, true])
superPrint([1,2, true, "a"])


type SuperPrint2 = {
    //(arr:number[]):void
    //(arr:boolean[]):void
    //(arr:string[]):void
    <T>(arr:T[]):T		//generic사용하고 결과도 generic으로
}

//const superPrint :SuperPrint = (arr) => {
//  arr.forEach(i => console.log(i))    
//}
const superPrint2 :SuperPrint = (arr) => arr[0]
 
const a1 = superPrint2([1,2,3,4])
const b1 = superPrint2([true, false, false])
const c1 = superPrint2(["a","b","c"])
const d1 = superPrint2([1,2, true])
const e1 = superPrint2([1,2, true, "a"])


// generic과 any는 사용이 비슷함. generice대신 any를 넣어도 실행되지만 형체크를 할수가 없음으로 추천하지 않음. 될수있음 generic을 사용할 것

//typescript에 함수의 첫번째 파라메터로 배열이 올거라고 말하고
//M은 두번째 파라메터로 온다는 뜻
type SuperPrint3 = <T, M>(a:T[], b:M) => T
const superPrint3 : SuperPrint = (a) => a[0]

//실제 사용예제
const a2 = superPrint3([1,2,3,4], "x")
const b2 = superPrint3([true, true, false], 1)
const c2 = superPrint3(["a", "b","c"], false)
const d2 = superPrint3([1,2,true,"a"], [])



//제너릭 예제……타입을 사용
function superPrint4<T>(a:T[]) {
    return a[0]
}
const a4 = superPrint4<number>([1,2,3,4])
console.log(a4)


type Player2<E> = {
    name :string
    extraInfo:E
}
const nico2 : Player2<{favFood:string}>= {
    name:"nico",
    extraInfo : {
        favFood : "김치"
    }
} 
 
type NicoPlayer = Player2<{favFood:string}>
const nico3 : NicoPlayer = {
    name:"nico",
    extraInfo : {
        favFood : "김치"
    }
} 
 
type NicoExtra = {
    favFood : string
}
type NicoPlayer2 = Player2<NicoExtra>
const nico4 : NicoPlayer2 = {
    name:"nico",
    extraInfo : {
        favFood : "김치"
    }
} 
const lynn : Player2<null> = {
    name : "lynn",
    extraInfo : null
}
