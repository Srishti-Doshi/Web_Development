class CafeManager{
  private static instance: CafeManager;
  private constructor(){}

   static getManager(): CafeManager{
    if(CafeManager.instance){
       return CafeManager.instance;
    }
    else{
      CafeManager.instance = new CafeManager();
      return CafeManager.instance;
    }

  }
}

// let manager_ji = new CafeManager();
// let manager_bhaiya = new CafeManager();

// console.log(manager_bhaiya === manager_ji)

let m1 = CafeManager.getManager();
let m2 = CafeManager.getManager();

console.log(m1 === m2);


let b : undefined = undefined;
// b = 89;  //error