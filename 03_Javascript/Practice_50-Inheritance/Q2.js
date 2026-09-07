//Q Create a new class called Admin which inherits from User. Add a new method called edit data to Admin that allows it to edit website data.

let data = "some data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log('Data:', data);
    }
}

class Admin extends User {

    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "some new data";
        console.log('data: ', data);

    }
}

let admin = new Admin("sonu", "sonu@gmail.com");

console.log(admin.editData());