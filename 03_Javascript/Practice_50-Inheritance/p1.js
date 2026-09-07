class human{
    human(){
        console.log('humanity');
    }
}

class person extends human{
    eat(){
        console.log('eat');       
    }
    sleep(){
        console.log('slep');       
    }
    // human(){
    //     console.log('person humanity');
    // }
}

class engineer extends person{
    work(){
        console.log('work');       
    }
    code(){
        console.log('coding');       
    }
    // human(){
    //     console.log('engineer humanity');
    // }
}

let tinka = new engineer();
tinka.eat();
tinka.human();