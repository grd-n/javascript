// const age = prompt("How old are you?");

// console.log(typeof age); // prompt를 통해 입력한 값은 string인 것을 확인할 수 있다.

// // 그렇다면 자료형을 바꿔줄 수는 없을까?

// // 이 때 등장하는 것이 parseInt(); 이다. 이는 문자열 자료형을 숫자형으로 바꿔준다.

// console.log(typeof age, typeof parseInt(age)); // 콘솔창에서 보았듯이 typeof age는 string, typeof parseInt(age)는 number로 뜨는 것을 알 수 있다.

// console.log(age, parseInt(age)); // 문자형이면 크기 차이를 비교할 수 없지만, 숫자형 자료형일 시 크기차이를 비교할 수 있다.
// 또는 프롬프트 창에 숫자가 아닌 문자를 집어넣었을 때, NaN(Not a Number)가 뜨며 처리 불가함을 나타내어 줄 수도 있다.

const age = parseInt(prompt("How old are you?"));

// console.log(age);
// console.log(typeof age);

// isNaN >>> 입력된 값이 숫자냐 아니냐에 따라서 booleans 자료형을 결과값으로 내는 함수
// isNaN이 true이면 숫자가 아니라는 뜻이므로 문자형 자료형인 것이고, 숫자형 자료형이 들어가면 "숫자가 아닌것"이 아니기 때문에 false가 나온다.

trueOrFalse = isNaN(age); // 하나의 변수에 저장해서 써도 된다. 이 때 trueOrFalse는 booleans 자료형으로 나타내어진다.

// 결과값, return값으로 booleans 자료형을 내기 때문에 이를 이용해서 조건문을 사용할 수도 있다.

if (isNaN(age) || age<0) {
    console.log("제대로 된 나이를 입력하세요"); // 이 부분은 true 이면 실행. if 조건문의 규칙이다.
} else if (age<18){
    console.log("너무 어리군요");
} else if (age>=18 && age<=50){
    console.log("술을 사실 수 있습니다.");
} else if (age>50){
    console.log("건강 조심하세요!");
}
// 참고로 AND는 &&, OR은 ||로 쓴다. 연산자!

