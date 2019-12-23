//arrow function : 화살표를 이용하여 함수를 간략히함. return, function 쓰지 않아도 댐

arr=[1,2,3,4,5,6,7,8,9,10] //리스트 생성
arr_map = arr.map(v => v*2) //map은 계산할때 사용
console.log(arr_map)

arr_filter = arr.filter(v => v>5) //filter는 분류할때, 선별할때 사용
console.log(arr_filter)


class Animal {
    constructor(leg) { //constructor : python의 def__init과 같은 역할. 초기설정하는 함수.
        this.leg = leg
    }

    printAnimal() {
        console.log(this.name + "은 " + String(this.leg)+ "개의 다리를 가진다.")
    }
}

// Lion -> Animal에서 유능한 기능을 가져다 쓸수 있다!
class Lion extends Animal {
    constructor(name, leg) { 
        super(leg) //부모의 input (constructor의 input)
        this.name = name
    }
    getName() {
        console.log("내 이름은 " +this.name)
    }
}

myLion = new Lion("King",4)
myLion.getName()
myLion.printAnimal()
