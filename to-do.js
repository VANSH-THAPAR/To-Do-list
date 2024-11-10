var num = 0
var list = document.getElementById('list')
var add = document.getElementById('add')
var inpval = document.getElementById('input')
var clearall = document.getElementById('clear-all')

function remove() {
    localStorage.delete(num)
}
add.addEventListener('click', () => {
    var li = document.createElement('li')
    num++
    localStorage.setItem(num, inpval.value)
    var removebutton = document.createElement('div')
    removebutton.textContent = 'x'
    li.innerHTML = localStorage.getItem(num)
    removebutton.style.borderRadius='50%';
    removebutton.style.width='20px';
    removebutton.style.cursor='pointer'
    removebutton.style.height='20px';
    removebutton.style.justifyContent='center'
    removebutton.style.alignItems='center'
    removebutton.style.display='flex';
    removebutton.style.border='2px solid black'
    li.appendChild(removebutton)
    li.style.listStyle = 'none'
    li.style.paddingLeft = '10px'
    li.style.paddingBottom = '4px'
    li.style.fontWeight='bold'
    removebutton.style.fontfamily='Segoe UI'
    li.style.fontSize='20px'
    list.appendChild(li)
    inpval.value = ''
    removebutton.addEventListener('click', () => {
        removebutton.parentElement.style.display = 'none';
    })
    li.style.width='90%'
    li.style.display='flex'
    li.style.justifyContent='space-between'

})
clearall.addEventListener('click', () => {
    localStorage.clear()
    num = 0
    list.innerHTML = ''
})