enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let myColor : Color = Color.Green;
console.log(myColor);

enum TrafficLight {Red, Yellow,Green} //기본값을 0,1,2 배정
let currentLight: TrafficLight = TrafficLight.Red;
console.log(currentLight);

enum DayOfWeek{
    Monday = "월요일",
    Wednesday = "수요일",
    Friday = "금요일"
}
let today:DayOfWeek = DayOfWeek.Friday;
console.log(`오늘은 ${today}이다!`);