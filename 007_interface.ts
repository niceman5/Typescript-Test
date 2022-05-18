namespace ts006 {
    //type을 별명처럼 사용
    type NickName = string
    type Health = number
    type Friends = Array<string>

    //타입스크립트에 오브젝트의 모형을 설명해줄수 있음
    type Player = {
        //nickname : string,
        nickname :NickName,
        //healthBar : number
        healthBar :Health
    }

    const nico : Player = {
        nickname : "김",
        healthBar : 10
    }
    //형을 지정해서 사용
    type Food = string;
    const kimchi:Food = "맛있음"
}