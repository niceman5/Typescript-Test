// 
// 열거형의 사용
// 
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["blue"] = 20] = "blue";
    Color[Color["green"] = 30] = "green";
})(Color || (Color = {}));
let c = Color.blue;
console.log(c);
//# sourceMappingURL=001-enum.js.map