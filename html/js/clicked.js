function clicked() {
    var name = document.getElementById("namedata").value
    var email = document.getElementById("emaildata").value
    var ssn = document.getElementById("ssndata").value
    var dob = document.getElementById("dobdata").value
    var phonenumber = document.getElementById("phonenumberdata").value
    var maidenname = document.getElementById("maidennamedata").value
    var petname = document.getElementById("petnamedata").value
    var nickname = document.getElementById("nicknamedata").value

    if(name.length > 0 && email.length > 0 && ssn.length > 0 && dob.length > 0 && phonenumber.length > 0 && maidenname.length > 0 && petname.length > 0 && nickname.length > 0) {
         alert("Thank you for your submission!");
    }
}