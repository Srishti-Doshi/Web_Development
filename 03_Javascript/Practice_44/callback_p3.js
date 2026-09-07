function make_tea(cb) {
    console.log('preparing tea...');
    cb();
};

function tea_ready(){
    console.log('tea is ready');
    
}
make_tea(tea_ready);
