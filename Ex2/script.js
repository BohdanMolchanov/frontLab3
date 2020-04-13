const container=document.querySelector('#pascal');
function triangle(){
    var array = [];
    var arrSize = prompt('Type triangle height:', arrSize);
    container.innerHTML="";

    for(let i = 1; i <= arrSize; i++)
    {
        array[i] = 0;
    }
    array[0] = 1;
    for(var j = 1; j <= arrSize; j++)
    {
        let div=document.createElement('div');
        div.setAttribute('class','pascal-div');
        for(var i = j; i >= 1; i--)
        {
            let span=document.createElement('span');
            span.setAttribute('class','pascal-span');
            span.textContent=array[i-1];
            array[i] = array[i-1] + array[i];
            div.appendChild(span);
        }
        container.appendChild(div);
    }
    
}