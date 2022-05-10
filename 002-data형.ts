type Age = number;
type Name = string;

interface Player {
  // 생성할때 값설정하고 그 이후 변경 못함
  readonly name: Name;
  age?: Age;
}

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const nico = playerMaker("nico");
nico.age = 12;

console.log(nico);

const nums: readonly number[] = [1, 2, 3, 4];
//nums.push(5)       //에러남

/**
 * datatype에 any를 쓰면 이건  javascript로 돌아가는것..데이터체크를 못한다.
 * any는 typescript의 데이터/형체크에서  빠져나올때 사용 → 될수있음 사용하지 않는것을 추천
 */

/**
 * typescript의 특별한 형 unknow
 * ->any와 비슷하지만 틀림. 이건 typescript의 보호를 받고 있는 상태임
 */
let a: unknown;
a = 5;
if (typeof a === "number") {
  let b = a + 1;
  console.log(b);
}

/**
 * void return값이 없음을 나타낸다.
 * never 항상 오류를 출력하거나 값을 절대 return하지 않을때
 */
function hello(): never {
  throw new Error("xxx");
}
// 무조건 에러를 리턴하는 함수임
function hello2(name: string | number): never {
  if (typeof name === "string") {
    console.log(name); //—> string형임
  } else if (typeof name === "number") {
    console.log(name); // → number형임
  } else {
    console.log(name); // never형…절대 실행되면 안되는 부분임
  }
  throw new Error("xxx");
}

/**
 * 전개연산자 "..."으로 코딩
 * 타입스크립트는 ES6의 전개 연산자(spread operator)를 지원한다.
 * 전개 연산자는 '...'로 나타내는데 다음 세 가지 경우에 사용된다.
 *
 * 1)나머지 매개변수를 선언할 때
 * 2)배열 요소를 확장할 때
 * 3)객체 요소를 확장할 때
 */

//배열 concat 예제
let arr: number[] = [1, 2];
let arr2: number[] = [...arr, 3, 4];
console.log("배열 concat 예제");
console.log(arr2); //[1,2,3,4]

//rest를 사용한 전개 연산자 (배열)
let [first, ...rest]: number[] = [10, 20, 30];
console.log("rest를 사용한 전개 연산자 (배열)"); //10
console.log(first); //10
console.log(rest); //[20, 30]
console.log("---------------------------------------------");

//rest를 사용한 전개 연산자 (객체)
console.log("rest를 사용한 전개 연산자 (객체)");
let numGroup = { n1: 1, n2: 2, n3: 3 };
let { n2, ...rest1 } = numGroup;
console.log(n2, rest1.n3); //2 { n1: 1, n3: 3 }
let { ...rest2 } = numGroup;
console.log(rest2); //{ n1: 1, n2: 2, n3: 3 }
console.log("---------------------------------------------");
// 배열의 원소들의 합을 출력하는 함수를 만든다고 해보자. 배열을 인자로 받은 후에 for문 돌려서 return을 하는 것이 그려지는가? 이런 방법도 있다는 것을 알아보자.
function sum(...rest: number[]): number {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result); //21
console.log("---------------------------------------------");

/**
 * 인덱스를 이용해 값을 가져올 수 있는 for in 문과 달리 for of 문은 곧바로 값을 가져올 수 있다.
 * 이터러블(iterable)은 반복 가능한 객체인 배열, 문자열, DOM 컬렉션, 맵(Map)과 셋(Set) 등을 말한다
 */

const obj = {
  foo: "hello",
};

const propertyName = "foo";
console.log(obj[propertyName]);
console.log(obj["foo"]);

// const fruits = { a: "apple", b: "banana", c: "cherry" };
// for (let property in fruits) {
//   console.log(property); // a apple b banana c cherry
//   console.log(fruits[property]);
// }
//위는 컴파일 오류라고 뜨는데 실행은 됨 아래처럼 key가 string이라고 명시하고 하면 문제 없음
const fruits: { [key: string]: string } = {
  a: "apple",
  b: "banana",
  c: "cherry",
};
console.log(fruits);
for (let property in fruits) {
  console.log(property); // a apple b banana c cherry
  console.log(fruits[property]);
}

for (const value of [1, 2, 3]) {
  console.log(value); // 1, 2, 3
}

/**
 * 다음과 같은 TypeScript 코드가 있다. b와 c은 string 타입이 맞지만, a은 "Hello World" 타입이다.
 * b 변수는 let으로 선언되어 재할당될 수 있을 경우 어떤 문자열이든 넣을 수 있으며 그 경우의 수가
 * 무한대이다. 그렇기 때문에 컴파일러는 이 변수를 string 타입으로 추론한다. 그리고 c 변수는
 * 명시적으로 string 타입으로 선언했으므로 그냥 string 타입이다.
 *
 * 하지만 a의 경우는 조금 이야기가 달라진다. 컴파일러는 이 변수를 string이 아닌 조금 더 좁은
 * 타입(narrowed type)으로 선언한 것으로 추론한다. 이 것을 Literal Narrowing이라고 한다.
 * (참고로 타입 추론은 TypeScript 컴파일러가 제공하는 뛰어난 기능 중 하나이며, 개발자가
 * 명시적으로 타입을 선언해 주지 않을 경우 컴파일러가 할당되는 값을 기준으로 타입을 스스로
 * 결정하는 것을 말한다.)
 *
 * 따라서 a의 타입은 string이 아니라 string타입을 좁혀 만든 string literal type이다. 여기서
 * "타입을 좁힌다"는 말의 의미는 무한대의 경우의 수를 가질 수 있는 string타입보다 훨씬
 * 구체적인 string의 부분집합, "Hello World"만을 허용하는 타입을 선언했다는 뜻이다.
 *
 * String Literal의 유용함
 * string literal 타입은 열거형 타입처럼 사용할 때 매우 유용하다.
 */

const aa = "Hello World";
let bb = "Hello World";
const cc: string = "Hello World";

//다음의 예제과 같이 string literal 타입 조합만을 허용하도록 하도록 수정한다.
// 여기서 |은 union type을 의미하며 두 개의 타입 이상을 결합할 수 있다.
type EventType = "mouseout" | "mouseover" | "click";
function handleEvent(event: EventType) {}
handleEvent("click");
//handleEvent("hover");   // compile error: Ar

/**
 * ES6에 추가된 이터러블 객체로 맵(Map)과 셋(Set)이 있다.
 * 맵 객체는 키 중복을 허용하지 않는 자료구조이다
 */
console.log("---------------------------------------------");
let itMap = new Map([
  ["one", 1],
  ["one", 2],
]);
itMap.set("one", 3);

for (let entry of itMap) {
  console.log(entry); // ['one', 3]
}

//Set은 어떤 타입의 값이든 유일한 값을 저장할 수 있다.
let isSet = new Set(["a", "b", "c", "d", "a", "b", "c"]);
for (let value of isSet) {
  console.log(value); //a b c d
}

/**
 * 기본 연산자
 * 비교 연산자 ===, >=, <, ...
 * 타입 스크립트에서 "==" 연산자 대신 "==="을, "!=" 연산자 대신 "!=="을 사용하기를
 * 권장하는 이유는 자바스크립트로 컴파일하고 나서도  타입 안정성을 보장할 수 있기 때문이다.
 *
 * 논리 연산자 &&,||,!
 * truthy, falsy에 대해... 우리는 코딩을 하면서 자주 이런 에러를 만나게 된다.
 * Cannot read property 'name' of undefined. 항상 객체의 property에 접근할때는
 * 해당 객체가 undefined인지 check logic을 넣어야한다. 아래의 예제를 보면
 * name property를 사용하기 위해 animal을 체크 한다. 마지막으로 name도 비어
 * 있는 값인지 체크한다.
 */
function getName1(animal: { name: string }): string {
  let name: string = "";
  if (animal) {
    name = animal.name;
  }
  if (!name) return "이름이 없는 동물";
  else return name;
}
//위의 예제처럼 쓸 수 있지만 논리 연산자를 사용하면 이렇게 줄일 수 있다.
function getName2(animal: { name: string }): string {
  return (animal && animal.name) || "이름이 없는 동물";
}

//타입스크립트는 ES7의 지수 연산자인 **를 지원하므로 Math.pow를 대체해서 사용할 수 있다.
console.log(10 ** 3); // 1000
console.log(1 + "happy"); // 1happy
