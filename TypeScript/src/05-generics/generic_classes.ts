class BottleMaker<T>{
    constructor(public key: T){}
}

let milton = new BottleMaker("abc");  // key => abc