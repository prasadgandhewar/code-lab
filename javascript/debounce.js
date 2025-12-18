


function debounce(fn, delay){
    let timerid = null;
    return function(...args){
        if(timerid){
            clearTimeout(timerid);
        }
        
        timerid = setTimeout(()=>{
            fn.apply(null, ...args);
        }, delay);
    }
}

function myfunc(){
    console.log('hi');
}

const defun = debounce(myfunc, 1000);
defun();
defun('a');
defun('aa');