global_name = "";
global_dob = "";
global_id = "";
global_add = "";

function checkLogin(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let id = document.getElementById("id-number").value;
    let address = document.getElementById("address").value;

    global_name = name;
    global_dob = dob;
    global_id = id;
    global_add = address;    
    if (name === "" || dob === "" || id === "" || address === ""){
        alert("Please fill in all information");
    }
    else{
        if(String(id).length !== 12){
            alert("ID number must be 12 numbers long");
        }
        else if(dob > Date.now){
            alert("Date of birth is invalid");
        }else
        window.location.href='tracno.html';
    }
}

function survey(event){
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    
    
    let survey_info_name = document.getElementById("taker-name");
    let survey_info_dob = document.getElementById("taker-dob");
    let survey_info_id = document.getElementById("taker-id");
    let survey_info_add = document.getElementById("taker-add");

    survey_info_name.textContent = "Name: " + global_name;
    survey_info_dob.textContent = "DOB: " + global_dob;
    survey_info_id.textContent = "ID: " + global_id;
    survey_info_add.textContent = "Add: " + global_add; 

    return;
}