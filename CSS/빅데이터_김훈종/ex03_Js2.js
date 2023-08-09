
let span_value = document.getElementById('spanTag');


const increase_num = () => {
    span_value.innerText = Number(span_value.innerText)+1;
}


const decrease_num = () => {
    
    
    Number(span_value.innerText) > 0 && 
    (span_value.innerText = Number(span_value.innerText)-1);
}

const reset_num = () => {
    span_value.innerText = `0`;
}