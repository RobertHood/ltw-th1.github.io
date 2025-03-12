function checkLogin(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dateofbirth").value;
    let id = document.getElementById("id-number").value;
    let address = document.getElementById("address").value;

    if (name === "" || dob === "" || id === "" || address === ""){
        alert(address);
    }
    else{
        if(String(id).length !== 12){
            alert("ID number must be 12 numbers long");
        }
        window.location.href='tracno.html';
    }
}