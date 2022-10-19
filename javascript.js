const list_span = document.querySelectorAll('span')


list_span.forEach( item =>{
    let x =Math.floor(1000);
    let y =Math.floor(1000);
    item.style.transform = `translate(${x}px,${y}px)`
})
let index=0;
setInterval(()=>{
    list_span[index].style.transform = 'translate(0px,0px)'
    index++
},300)