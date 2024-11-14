let num = 1;
var list = document.getElementById('list')
var add = document.getElementById('add')
var inpval = document.getElementById('input')
var clearall = document.getElementById('clear-all')
let time =document.getElementById('time');
let day =document.getElementById('day');
function updatetime(){
    const now= new Date();
    const hours= String(now.getHours()).padStart(2,'0');
    const minute= String(now.getMinutes()).padStart(2,'0');
    const seconds= String(now.getSeconds()).padStart(2,'0');
    const day1= String(now.getDate()).padStart(2,'0');
    const month= now.getMonth();
    let month1="a";
    const year=String(now.getFullYear()).padStart(2,'0')
    if(month==0){
        month1='january';
    }
    else if(month==1){
        month1='feburary';
    }
    else if(month==2){
        month1='March';
    }
    
    else if(month==3){
        month1='April';
    }
    
    else if(month==4){
        month1='May';
    }
    
    else if(month==5){
        month1='June';
    }
    
    else if(month==6){
        month1='July';
    }
    
    else if(month==7){
        month1='August';
    }
    
    else if(month==8){
        month1='September';
    }
    
    else if(month==9){
        month1='October';
    }
    
    else if(month==10){
        month1='November';
    }
    else{
        month1='December';
    }
    let displayTime=`${hours} : ${minute} : ${seconds}`;
    let displayDay=`${day1}th ${month1} ${year}`;
    day.innerHTML=displayDay;
    time.innerHTML=displayTime;
};
setInterval(updatetime,1000)
function remove() {
    localStorage.removeItem(num)
}
add.addEventListener('click', () => {
    num++
    var li = document.createElement('li')
    localStorage.setItem(1, num)
    localStorage.setItem(num, inpval.value)
    var removebutton = document.createElement('div')
    removebutton.textContent = 'x'
    li.innerHTML = localStorage.getItem(num)
    removebutton.style.borderRadius ='50%';
    removebutton.style.width ='20px';
    removebutton.style.cursor ='pointer'
    removebutton.style.height ='20px';
    removebutton.style.justifyContent='center'
    removebutton.style.alignItems='center'
    removebutton.style.display='flex';
    removebutton.style.border='2px solid white'
    li.appendChild(removebutton)
    li.style.listStyle = 'none'
    li.style.paddingLeft = '10px'
    li.style.paddingBottom = '4px'
    li.style.fontWeight='bold'
    removebutton.style.fontfamily='Segoe UI'
    removebutton.style.color='white';
    li.style.color='white';
    li.style.fontSize='20px';
    list.appendChild(li)
    inpval.value = ''
    let z='';
    removebutton.addEventListener('click', (value) => {
        value.target=z
        for(let i=2;i<localStorage.length;i++){
            if(x==localStorage[i]){
                localStorage.removeItem(i)
            }
        }
        
        
        
        removebutton.parentElement.style.display = 'none';
        localStorage.removeItem(num)
        
        num--
        localStorage.setItem(1, num)
    })
    li.style.width='90%'
    li.style.display='flex'
    li.style.justifyContent='space-between'    
})

inpval.addEventListener('keydown', (event) => {
    if(event.key=="Enter"){
    add.click();
        //     num++
    //     var li = document.createElement('li')
    //     localStorage.setItem(1, num)
    //     localStorage.setItem(num, inpval.value)
    //     var removebutton = document.createElement('div')
    //     removebutton.textContent = 'x'
    //     li.innerHTML = localStorage.getItem(num)
    //     removebutton.style.borderRadius ='50%';
    //     removebutton.style.width ='20px';
    //     removebutton.style.cursor ='pointer'
    //     removebutton.style.height ='20px';
    //     removebutton.style.justifyContent='center'
    //     removebutton.style.alignItems='center'
    //     removebutton.style.display='flex';
    //     removebutton.style.border='2px solid white'
    //     li.appendChild(removebutton)
    //     li.style.listStyle = 'none'
    //     li.style.paddingLeft = '10px'
    //     li.style.paddingBottom = '4px'
    //     li.style.fontWeight='bold'
    //     removebutton.style.fontfamily='Segoe UI'
    //     removebutton.style.color='blace';
    //     li.style.color='black';
    //     li.style.fontSize='20px';
    //     li.style.fontSize='20px';
    //     list.appendChild(li)
    //     inpval.value = ''
    //     let z='';
    //     removebutton.addEventListener('click', (value) => {
    //         value.target=z
    //         for(let i=2;i<localStorage.length;i++){
    //             if(z==localStorage[i]){
    //                 localStorage.removeItem(i)
    //             }
    //         }
    //         removebutton.parentElement.style.display = 'none';
    //         localStorage.removeItem(num)
            
    //         num--
    //         localStorage.setItem(1, num)
    //     })
    //     li.style.width='90%'
    //     li.style.display='flex'
    //     li.style.justifyContent='space-between'    
    }
})
clearall.addEventListener('click', () => {
    num = 1
    localStorage.clear()
    localStorage.setItem(1, num)
    list.innerHTML = ''
})
document.addEventListener('DOMContentLoaded',()=>{  
    num=parseInt(localStorage.getItem(1)) || 1;
    for(let num1=2;num1<=num;num1++){
        let lis = document.createElement('li')
        list.appendChild(lis);
        lis.innerHTML=localStorage.getItem(num1)
        var removebutton = document.createElement('div')
        removebutton.textContent = 'x';
        removebutton.style.borderRadius ='50%';
        removebutton.style.width ='20px';
        removebutton.style.cursor ='pointer'
        removebutton.style.height ='20px';
        removebutton.style.justifyContent='center'
        removebutton.style.alignItems='center'
        removebutton.style.display='flex';
        removebutton.style.border='2px solid white'
        lis.appendChild(removebutton);
        lis.style.listStyle = 'none';
        lis.style.paddingLeft = '10px';
        lis.style.paddingBottom = '4px';
        lis.style.fontWeight='bold';
        removebutton.style.fontfamily='Segoe UI';
        removebutton.style.color='white';
        lis.style.color='white';
        lis.style.fontSize='20px';
        inpval.value = '';
        lis.style.width='90%';
        lis.style.display='flex';
        lis.style.justifyContent='space-between';
        removebutton.addEventListener('click', (event) => {
            const target=event.target;
            target.parentElement.style.display = 'none';
            localStorage.removeItem(num1);
            num--;
            localStorage.setItem(1, num);
        })
    }
})