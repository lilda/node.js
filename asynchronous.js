// 비동기성, 동기성에 대해

//비동기성 : 모든것이 절차적으로 시행되지 않는다.
//동기성 : 모든 코드들이 절차적으로 진행된다.

//자바스크립트는 웹에 치중되어있기 때문에 인터넷 속도에 의존한다.
//따라서 인터넷이 느려도 유저 인터랙션은 되어야된다.

//call back = 다 되면 알려줘. 다른거 실행할게.

// prints text and waits half a second
//function doSomethingElseAsync(callback) {
//    console.log('doSomethingElseAsync: Wait for half a sec.');
//    setTimeout(function() { callback(); }, 500);
//}
function sayHello(name,byeCallback) { //sayHello 함수는 sayGoodbye함수를 입력값으로 받느다.
    setTimeout(()=>{
        console.log(name+"님 안녕하세요");
        byeCallback()
    }, 2000) //2초뒤에 settime 실행해줘, 코드를 실행시켜줘
}

// sayHello(()=>console.log("안녕히가세요"))

sayHello("Mike", function() {
    console.log("안녕히 가세요")
})



