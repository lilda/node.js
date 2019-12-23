//언젠가 꼭 해결하겠다는 약속
//Resolve -> 해결 -> then
//Reject -> 거절, 시패 -> catch

function sayHello(name,byeCallback) {
    setTimeout(()=>{
        console.log(name+"님 안녕하세요");
        byeCallback()
    }, 2000);
}


sayHello("Mike", function() {
    console.log("안녕히 가세요")
})

function sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            resolve("서울")
        }, 3000)
    }
    )
}

//sayHello2("Frank")
//    .then((loacation)=> console.log(location+"안녕히가세요")) 
    //location:변수 resolve의 output을 then의 input으로 받음.

//then을 더 직관적으로 쓰는 방법(then 대체) 
//=> 함수앞에 async 적기, 비동기함수(오래걸리는 함수) 앞에 await 적기.

function sayHello3(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            resolve("서울")
        }, 3000)
    }
    )
}

async function sayHelloBye(name) {
    loc = await sayHello3(name) //await의 유무비교하기!!
    
    console.log(loc +"로 안녕히 가세요")
}

sayHelloBye("Jeewon")

//정리
//1.비동기의 문제를 해결하기 위한 callback
//2.작업이 완료되면 알려주는 callback은 가독성이 좋지 않다.
//3.그래서 나온것이 완료를 약속하는 Promise다.
//4. Then 과 Catch로 편리한 사용이 가능하다.
//5. 더 편리하게 마든건이 async/await이다.