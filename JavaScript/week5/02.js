class Person {
	// 필수요소
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(this.name + "hello");
	}

	sayMyAge() {
		console.log(`내 나이는 ${this.age}살 이에요!`);
	}
}

// 설계도를 통해 인스턴스를 만들어보기
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.sayHello();
person1.sayMyAge();

person2.sayHello();
person2.sayMyAge();
