function checkLogin(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let id = document.getElementById("id-number").value;
    let address = document.getElementById("address").value;

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

function survey(){
    
}