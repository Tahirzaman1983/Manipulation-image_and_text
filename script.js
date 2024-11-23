let control=document.getElementById('control');
let inputText=document.getElementById('inputText');
let btn1=document.getElementById('btn1');
let para1=document.getElementById('para1');

 
btn1.addEventListener("click", ()=>{
 let newset=inputText.value;
 if (newset.trim() !== "")  {
    para1.textContent=newset;
    let update=document.createElement('p');
    update.textContent="text has been updated";
    control.appendChild(update);
 } else{
    alert("please enter some text ");
 }
 inputText.textContent='';
})

function toggle(){
    let image=document.getElementById('image');
    var ouput=document.getElementById('output');
    if(image.src.includes('img1.jpg')){
        image.src=("img2.jpg")
        ouput.textContent="this image 2 two ";
    }
    else{
         image.src=("img1.jpg")
        ouput.textContent="this image 1 one ";
    }
}
function hideimg(){
    var image=document.getElementById('image');
    
    image.style.display="none";
    output.textContent="now image is hide ";
}
function visible(){
    var image=document.getElementById('image');
    
    image.style.display="block";
    output.textContent="now image is visible ";
}