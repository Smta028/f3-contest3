let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passInput = document.querySelector("#password");
let confirmPassInput = document.querySelector("#confirmPass");
let signupBtn = document.querySelector("#submitBtn");
let logoutBtn = document.querySelector(".logout");
let errorMssg = document.querySelector(".error");
let successMssg = document.querySelector(".successfull");
let formPage = document.querySelector(".formDetails");
let profileDetails = document.querySelector(".profilePage");
let profileName = document.querySelector(".pname");
let profileEmail = document.querySelector(".pemail");
let profilePass = document.querySelector(".ppassword");
let signBtn=document.querySelector(".signUp");
let profileBtn=document.querySelector(".profile");


// if(localStorage.getItem("userInfo")){
//     profileDetails.style.display ==="block"
//     formPage.style.display ==="none"

// }
signBtn.addEventListener("click",()=>{
if(formPage.style.display ==="none" &&  profileDetails.style.display ==="block"){
    alert("please logout first to sign up");
}
})
profileBtn.addEventListener("click",()=>{
    if(formPage.style.display ==="none" &&  profileDetails.style.display ==="block"){
        alert("you are already signed In");
    }
    else{
        alert("please sign up first")
    }
    })
    
        


signupBtn.addEventListener("click", (e) => {
   e.preventDefault();
    let nameVal = nameInput.value;
    let emailVal = emailInput.value;
    let passVal = passInput.value;
    let confirmVal = confirmPassInput.value;

    if (nameVal.trim()=== "" || emailVal.trim() === "" || passVal.trim() === "" || confirmVal.trim() === "") {
        errorMssg.style.display = "block";
    }
    else if (passVal !== confirmVal) {
        errorMssg.style.display = "none";
        alert("password and confirm password should be same");
        passInput.value = "";
        confirmPassInput.value = "";


    }
    else {
        var user = {
            name: nameInput.value,
            email: emailInput.value,
            password: passInput.value,
            confirmPass: confirmPassInput.value,
            accessToken: generatetoken(),

        };
        localStorage.setItem("user", JSON.stringify(user));
        errorMssg.style.display = "none";
        successMssg.style.display = "block";
        formPage.style.display = "none";
        profileDetails.style.display = "block";


       
    }

});



function generatetoken() {
    let generatedToken = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++) {
        generatedToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return generatedToken;
}
let userInfo={}
    
if( localStorage.getItem("user")){
   userInfo=JSON.parse(localStorage.getItem("user"));
   console.log(userInfo.name)
   profileName.innerHTML = `${userInfo.name}`;
   profileEmail.innerHTML = `${userInfo.email}`
   profilePass.innerHTML = `${userInfo.password}`
}


logoutBtn.addEventListener("click", () => {
    console.log("a");
    localStorage.removeItem("user");
    formPage.style.display = "block";
    profileDetails.style.display = "none";
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    confirmPassInput.value = "";
    successMssg.style.display = "none";
 
});





