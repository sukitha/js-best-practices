

function main() {
    inner();
}

function inner(){
    for(let i = 0; i < 5; i++){
        outter();
    }
}


function outter(){
    for(let i = 0; i < 8; i++){
        console.log(`inner ${i}`);
    }
}


main();