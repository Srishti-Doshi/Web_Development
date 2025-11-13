function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("200");
        }, 2000)
    });
}
// api();

// await api(); ->SyntaxError: await is only valid in async functions and the top level bodies of modules

async function getWeatherData(){
    await api();              //1st
    await api();              //2nd
    console.log("Heyyyyyy!!"); //3rd
}
getWeatherData();
