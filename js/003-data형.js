"use strict";
/*
** 객체의 속성에 각각의 property가 있는지 체크 후에 값을 할당하고 있다.
*/
function printProfile2(obj) {
    let name = "";
    let nation = "";
    name = obj.name ? "none" : obj.name;
    nation = obj.nation ? "?" : obj.nation;
    console.log(name); //happy
}
/*
* property를 매개변수에서 체크하면 좀 더 효율적인 코드가 될 수 있다.
* default값 선언
*/
function printProfile1({ name = "none", nation = "?" }) {
    console.log(name); //happy
}
let objType1 = {
    name: 'aa',
    nation: null,
};
//실제 함수를 구현
const add2 = (a, b) => a + b;
//구현한 함수 실행
console.log(add2(10, 10));
const add3 = (a, b) => {
    if (typeof b === "string")
        return a;
    return a + b;
};
console.log(add3(5, 20));
console.log(add3(5, '나나'));
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
};
const add4 = (a, b, c) => {
    //c가 존재하면 a+b+c
    if (c)
        return a + b + c;
    return a + b;
};
console.log(add4(1, 2));
console.log(add4(1, 2, 3));
const superPrint = (arr) => {
    arr.forEach(i => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, false]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true]);
superPrint([1, 2, true, "a"]);
//const superPrint :SuperPrint = (arr) => {
//  arr.forEach(i => console.log(i))    
//}
const superPrint2 = (arr) => arr[0];
const a1 = superPrint2([1, 2, 3, 4]);
const b1 = superPrint2([true, false, false]);
const c1 = superPrint2(["a", "b", "c"]);
const d1 = superPrint2([1, 2, true]);
const e1 = superPrint2([1, 2, true, "a"]);
const superPrint3 = (a) => a[0];
//실제 사용예제
const a2 = superPrint3([1, 2, 3, 4], "x");
const b2 = superPrint3([true, true, false], 1);
const c2 = superPrint3(["a", "b", "c"], false);
const d2 = superPrint3([1, 2, true, "a"], []);
//제너릭 예제……타입을 사용
function superPrint4(a) {
    return a[0];
}
const a4 = superPrint4([1, 2, 3, 4]);
console.log(a4);
const nico2 = {
    name: "nico",
    extraInfo: {
        favFood: "김치"
    }
};
const nico3 = {
    name: "nico",
    extraInfo: {
        favFood: "김치"
    }
};
const nico4 = {
    name: "nico",
    extraInfo: {
        favFood: "김치"
    }
};
const lynn = {
    name: "lynn",
    extraInfo: null
};
//# sourceMappingURL=003-data%ED%98%95.js.map