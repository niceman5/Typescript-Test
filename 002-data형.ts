type Age = number;
type Name = string;

interface Player {
    // 생성할때 값설정하고 그 이후 변경 못함
    readonly name : Name,    
    age?:Age
 }
 
 function playerMaker(name:string):Player {
     return {
         name
     }
 }

 const nico = playerMaker("nico")
 nico.age = 12

 console.log(nico)

 const nums : readonly number[] = [1,2,3,4]
 //nums.push(5)       //에러남

