// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// player.points = player.points + 15;
// console.log(player.points);

// function

// function sayHello(name, age){
//     // 함수에서 실행시킬 구문 위치
//     console.log("Hello my name is " + name + "and I am " + age + " years old.");
// }

// alert("Hi");
// sayHello("mike", 10);
// sayHello("dal");
// sayHello("lynn");
// sayHello("JW");

// function plus(a,b){
//     console.log(a+b);
// }

// plus(8,60);

// function devide(a,b){
//     console.log(a/b);
// } >> 함수 안에서 선언된 a, b같은 경우 함수 밖에서 존재할 수는 없다. 따로 선언해주지 않는 이상. 하지만 헷갈리기 때문에 동일 요소를 함수 밖에 선언하는 것은 좋지 않다.

// devide(98,20);


// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("hello "+ otherPersonsName + " nice to meet you");
//     }
// }

// console.log(player.name);
// player.sayHello("lynn");

// const player = {
// 	name: "mike",
//     sayHello: function(playerName){
//         console.log("안녕하세요, 축구선수" + playerName + "입니다.");
//     },
// }

// player.sayHello(player.name);

const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    multiply: function(a,b){
        console.log(a*b);
    },
    devide: function(a,b){
        console.log(a/b);
    },
};

calculator.add(3,4); // 7
calculator.minus(10,3); // 7
calculator.multiply(5,6); // 30
calculator.devide(35,7); // 5