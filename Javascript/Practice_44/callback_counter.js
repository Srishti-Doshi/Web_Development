function counter(num, getNextNum){
    setTimeout(()=>{
        console.log(num);
        getNextNum();
    },1000);
}

counter(1);