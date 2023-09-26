const mainBody= document.querySelector('body');

const divTop= document.createElement("div");

const tagInput= document.createElement('input');
const tagContent= document.createElement('input');
const tagStyle= document.createElement('input');

const buttonTop= document.createElement('button');
buttonTop.innerText='topButton';


buttonTop.addEventListener('click',()=>{

    const resultTag= tagInput.value;
    const resultContent= tagContent.value;
    const resultStyle= tagStyle.value;


    const createElement= document.createElement(resultTag);
    createElement.innerHTML=resultContent;
    
    const split=resultStyle.split(' ');
    console.log(split);

    for(let i of split){
        const indexFirst= i.indexOf("{")+1;
        const indexCenter= i.indexOf(":");
        const indexCenter2= i.indexOf(":");
        const indexLast= i.indexOf("}");

        console.log(indexFirst, indexCenter, indexLast);
        const style= i.slice(indexFirst, indexCenter);
        const change= i.slice(indexCenter2+1, indexLast);

        console.log(style);
        console.log(change);
        createElement.style[style]=change;
    }


    const firstTag =divTop.children[0];
    
    divTop.insertBefore(createElement, firstTag)
})

divTop.appendChild(tagInput)
divTop.appendChild(tagContent)
divTop.appendChild(tagStyle)
divTop.appendChild(buttonTop)
mainBody.appendChild(divTop)

const buttonButtom= document.createElement('button');
buttonButtom.innerText='downButtom';

buttonButtom.addEventListener('click',()=>{
    const resultTag= tagInput.value;
    const resultContent= tagContent.value;
    const resultStyle= tagStyle.value;


    const createElement= document.createElement(resultTag);
    createElement.innerHTML=resultContent;
    
    const split=resultStyle.split(' ');
    console.log(split);

    for(let i of split){
        const indexFirst= i.indexOf("{")+1;
        const indexCenter= i.indexOf(":");
        const indexCenter2= i.indexOf(":");
        const indexLast= i.indexOf("}");

        console.log(indexFirst, indexCenter, indexLast);
        const style= i.slice(indexFirst, indexCenter);
        const change= i.slice(indexCenter2+1, indexLast);

        console.log(style);
        console.log(change);
        createElement.style[style]=change;
    }


    const firstTag =divTop.children[0];
    
    divTop.appendChild(createElement, firstTag)
})

divTop.appendChild(buttonButtom)







