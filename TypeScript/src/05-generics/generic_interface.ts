interface Halwa<T>{
    name: string;
    quantity: number;
    key: T;
}

function plate(obj: Halwa<string>){ }

plate({name: "moonga ka halwa",quantity : 3, key : "shaadi" });