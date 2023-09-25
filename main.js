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
    const resultStyle= tagStyle.value

    // ! faghat inja man omadam injori mabna ro gharar dadm chon gofteh bodin ke mogeh dadan style {color:red} in shekili vard mikonin man ham hamin jori split ro anjam dadm.
    
    const [splitResult]= resultStyle.split(':')[1].split("}");
    console.log(splitResult);

    const createElement= document.createElement(resultTag);
    createElement.innerHTML=resultContent
    createElement.style.color=splitResult
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
    const resultStyle= tagStyle.value

    const [splitResult]= resultStyle.split(':')[1].split("}");
    console.log(splitResult);

    const createElement= document.createElement(resultTag);
    createElement.innerHTML=resultContent
    createElement.style.color=splitResult

    divTop.appendChild(createElement)
})

divTop.appendChild(buttonButtom)







