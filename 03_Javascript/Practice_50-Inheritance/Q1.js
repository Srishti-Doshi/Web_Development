// Q You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data


class User{
    constructor(name, email){
        this.name = name;
        this.email= email;
    }

    viewData(){
        console.log('Details:');
        console.log('Name: ', this.name);
        console.log('Email: ', this.email);
    }
}

s1 = new User("tiku", "tiku@gmail.com");
s1.viewData();