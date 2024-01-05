const panel = document.querySelectorAll('.panel');
console.log(panel)

function panelClick(){
    panel.forEach((image) =>{
        image.addEventListener('click', () =>{
            removeClass()
            image.classList.add('active');
  
        })
    })
    
}
panelClick()

function removeClass(){
    panel.forEach((image)=>{
        image.classList.remove('active')
    })
}