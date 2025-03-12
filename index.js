let count = 0;
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
        else if(dob > Date.now()){
            alert("Date of birth is invalid");
        }else
        window.location.href='tracno.html';
    }
}

function survey(event){
    if (count === 0){
        event.preventDefault();
        window.location.href = "#";
        alert("Please recheck your answer once again!");
        count++;
    }
    else if (count === 1){
        window.location.href = 'index.html';
        alert("Thank you for taking this survey!");
        count = 0;
        return;
    }
    
}