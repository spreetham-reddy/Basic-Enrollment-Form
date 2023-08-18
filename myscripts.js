let nameFeild = document.getElementById("nameId");
let emailFeild = document.getElementById("emailId");
let mobileFeild = document.getElementById("phoneId");
let resumeFeild = document.getElementById("resumeId");
let submitButton = document.getElementById("submitBtn");
let EntriesContainer = document.getElementById("entriesId");
var radio = document.getElementsByName('gender');

let c1 = document.getElementById("checkbox1");
let c2 = document.getElementById("checkbox2");
let c3 = document.getElementById("checkbox3");

submitButton.addEventListener("click",function(){
    console.log("Button Clicked");
    let listEl = document.createElement("li");
    listEl.classList.add("mt-3")
    let name = nameFeild.value;
    let email = emailFeild.value;
    let mobile = mobileFeild.value;
    let resume_link = resumeFeild.value;
    let gender = null;
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
            gender = radio[i].value;
        }
    }
    if(name === "" || email === "" || mobile=== "" || resume_link==="" || gender===""){
        alert("Enter Correct Values");
    }
    let text = "";
    if(c1.checked === true){
        text = text + c1.value + ",";
    }
    if(c2.checked === true){
        text = text + c2.value;
    }
    if(c3.checked === true){
        text = text + "," + c3.value;
    }

    listEl.innerHTML = "<strong>Name:</strong> " + name + "<br><strong>Email: </strong>" + email + "<br><strong>Mobile No: </strong> " + mobile + "<br><strong>Resume_Link: </strong> " + resume_link + "<br><strong>Gender: </strong>" + gender + "<br><strong>Skills: </strong>" + text; 
    EntriesContainer.appendChild(listEl);

    nameFeild.value = "";
    emailFeild.value = "";
    mobileFeild.value = "";
    resumeFeild.value = "";
    radio.value = "";
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
    for(i=0;i<radio.length;i++){
        radio[i].checked = false;
    }
});
