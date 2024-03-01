function genTicket(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);   // this will generate values 0 - 9  thats why *10
    }
    return arr;
}

function sum(arr){
return arr.reduce((sum, curr) => sum + curr, 0);
}

export {genTicket,sum};