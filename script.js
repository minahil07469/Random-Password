const passwordInput=document.querySelector(".password");
const copyIcon= document.querySelector(".icon")
const length = 12;

// allows charachet
const UpperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="#$&*?'|:/{},.()!-+=@_";
const allChar=UpperCase+LowerCase+number+symbol
function createPassword()
{
    let password="";
    password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
    password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length)
    {
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordInput.value=password;
}
copyIcon.addEventListener("click", () => {
    if(passwordInput.value) {
        navigator.clipboard.writeText(passwordInput.value)
            .then(() => {
                alert("Password copied!");
            })
            .catch(err => {
                console.error("Failed to copy password: ", err);
            });
    }
});