document.querySelector('.control-buttons span').onclick = function() {
    let youname = prompt('whates your name')
  
    if (youname=== null || youname==''){
document.querySelector('.name span').innerHTML = 'unknown name'
    }else{
        document.querySelector('.name span').innerHTML = youname
}
document.querySelector('.control-buttons').remove()
}

let duration =1000;
const blockChain = document.querySelector('.memory-game-blocks');
let blocks = Array.from(blockChain.children)
const orderrange= Array.from(Array(blocks.length).keys())


shuffle(orderrange)


blocks.forEach(function(block , index){
    block.style.order = orderrange[index]
    block.addEventListener('click',function(){
        flipp(block)
    })
})
function flipp(selectedblock){
    selectedblock.classList.add('isflipped')
    let allflippedblocks=blocks.filter(block=>block.classList.contains('isflipped'))
    if(allflippedblocks.length === 2){
        stopFlippedBlocks()
        checkMatchedBlock(allflippedblocks[0],allflippedblocks[1])
    }
}
function stopFlippedBlocks(){
    blockChain.classList.add('notflipped')
    setTimeout(function(block){
        blockChain.classList.remove('notflipped')
    },duration)
}

function checkMatchedBlock(firstBlock,secondBlock){
let tries = document.querySelector('.triels span ')
if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('isflipped');
    secondBlock.classList.remove('isflipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
}else{
    tries.innerHTML = parseInt(tries.innerHTML) + 1
setTimeout(()=>{
    firstBlock.classList.remove('isflipped');
    secondBlock.classList.remove('isflipped');
},duration)
}
}


function shuffle(Array){
let current = 18,
temp,random


while(current>0){
random = Math.floor(Math.random()*current) 
current--

temp =Array[current]
Array[current] =Array[random]
Array[random]=temp
}
return Array
}