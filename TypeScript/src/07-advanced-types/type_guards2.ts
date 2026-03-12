// Type Guards and TypeScript Utility Types

//Using  typeOf and instanceOf

//Partial, Required, Readonly

//need of Type guards
function abcd(arg: string | number) {
  // the only methods which are common in both string and number are the only one visible
  arg.toLocaleString()
  arg.toString()
  arg.valueOf()
}

abcd(12)
abcd("hey")


// type guards (tools like if else,typeof,  instanceof) => type guards provide type narrowing

function xyz(arg: string | number) {
  if (typeof arg === "string") {
    arg.toLowerCase();
  } 
  else if (typeof arg === "number") {
    arg.toFixed
  }
}

xyz(122)
xyz("hello")










class TV_Remote{
    switchOffTV(){
        console.log("TV switched off");
    }
}

class AC_Remote{
    switchOffAC(){
        console.log("AC switched off");
    }
}

const tv = new TV_Remote();
const ac = new AC_Remote();

function switchOffDevice(device: TV_Remote | AC_Remote){
    if(device instanceof TV_Remote){
        device.switchOffTV();
    }
    else if(device instanceof AC_Remote){
        device.switchOffAC();
    }
}

switchOffDevice(ac);