namespace ts006 {
    //type을 별명처럼 사용
    //키워드 타입을 이용햐 타입스크립에서 만들고 싶은 타입을 설정할수 있음
    type NickName = string
    //type Health = number
    type Friends = Array<string>

    //특업값만 사용될수 있게 지정
    type Team = "red"  | "blue" | "yellow"
    type Health = 1 | 5 | 10

    //타입을 사용하면 타입스크립트에 오브젝트의 모형을 설명해줄수 있음
    // type Player = {
    //     //nickname : string,
    //     nickname :NickName,
    //     //healthBar : number
    //     healthBar :Health

    //     team :Team
    // }

    //interface는 오브젝트의 모양을 특정하기 위한 것임
    //타입스크립트에서 오브젝트의 모양을 특정하기 위한 방법은 type과 interface가 있음
    //타입은 좀더 자유도가 있음. 다향하게 활용가능
   interface Player {
        //nickname : string,
        nickname :NickName,
        //healthBar : number
        healthBar :Health

        team :Team
    }
    const nico : Player = {
        nickname : "김",
        healthBar : 10,
        team : "blue"
    }
    //형을 지정해서 사용
    type Food = string;
    const kimchi:Food = "맛있음"


    interface User {
        name :string
    }
    interface User {
        lastname :string
    }
    interface User {
        health :number
    }

    //interface에서 동일 이름으로 선언하면 중첩됨. 타입스크립트에서 하나로 합쳐준다.
    const user:User =  {
        name : "aaaa",
        lastname : "aaaaa",
        health : 20
    }




}