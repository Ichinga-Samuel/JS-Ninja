function compute(x, y){
    "use strict";
    try{
        if(y===0){
            throw new Error('Division by zero not allowed')
        }
        var v = x / y;
        return v;
    }
    catch(e){
        console.log(e.message);
    }
    finally {
        if(!v)console.log('An Error Occurred');

    }
}

ans = compute(5, 0);
console.log(ans);