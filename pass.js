const btn=document.querySelector('.btn');
const input=document.querySelector("#input");
const icon=document.querySelector('.fa-copy');
const alert=document.querySelector(".alert_container");

btn.addEventListener("click",()=>{
    createPassword();
});

icon.addEventListener("click",()=>{
    copyPassWord();
    if(input.value){
        alert.classList.remove("pop_message");
        setTimeout(()=>{
            alert.classList.add("pop_message");
        },2000);
    };
});


function createPassword(){
    const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{};:,/<>?";
    let passWord="";
    const pass_len=12;
    for(let i=0;i<pass_len;i++){
        let rand_indx=Math.floor(Math.random()*chars.length);
        // passWord+=chars[rand_indx] or OR
        passWord+=chars.substring(rand_indx,rand_indx+1);
    };
    input.value=passWord;
};

function copyPassWord(){
    input.select(); //For Desktop and laps
    input.setSelectionRange(0,9999); //For Phoness
    navigator.clipboard.writeText(input.value);
    alert.innerText=input.value + " copied!!";
};

