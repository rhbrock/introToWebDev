function clearErrors(){
    for(var loopCounter=0; loopCounter < document.forms["displayEvens"]
    .elements.length; loopCounter ++){ 
        
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["displayEvens"]["num1"].value = "";
    document.forms["displayEvens"]["num2"].value = "";
    document.forms["displayEvens"]["num3"].value = "";
    document.getElementById("answer").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens"
    document.forms["displayEvens"]["num1"].focus();
}



function runTheNumbers() {
    var sN = document.forms["displayEvens"]["num1"].value;
    var eN = document.forms["displayEvens"]["num2"].value;
    var snN = document.forms["displayEvens"]["num3"].value;

    if (sN == "" || isNaN(sN)) {
        alert("Needs STARTING number");
        document.forms["displayEvens"]["num1"].parentElement.className =
        "form-group has-error";
        document.forms["displayEvens"]["num1"].focus();
        return false;
    }
    if (eN == "" || isNaN(eN)) {
        alert("Needs ENDING number");
        document.forms["displayEvens"]["num2"].parentElement.className =
        "form-group has-error";
        document.forms["displayEvens"]["num2"].focus();
        return false;
    }
     if (snN == "" || isNaN(snN)){
        alert("Needs STEP number");
        document.forms["displayEvens"]["num3"].value = "";
        document.forms["displayEvens"]["num3"].parentElement.className =
        "form-group has-error";
        document.forms["displayEvens"]["num3"].focus();
        return false;
     }
       else if (snN == 0 - 1) {
         alert("STEP must be an POSITIVE number")
         document.forms["displayEvens"]["num3"].value = "";
        document.forms["displayEvens"]["num3"].parentElement.className =
        "form-group has-error";
        document.forms["displayEvens"]["num3"].focus();
        return false;
     }
     else if (snN <= sN) {
         alert("STEP must be greater than STARTING");
         document.forms["displayEvens"]["num3"].value = "";
         document.forms["displayEvens"]["num3"].parentElement.className =
        "form-group has-error";
        document.forms["displayEvens"]["num3"].focus();
        return false;
     }
    else{}

    document.getElementById("answer").style.display = "block";
    document.getElementById("submitButton").innerText = "Again";

    document.getElementById("start").innerText = sN;
    document.getElementById("end").innerText = eN;
    document.getElementById("st").innerText = snN;


}


function evenSteps() {
    var sN = document.forms["displayEvens"]["num1"].value;
    var eN = document.forms["displayEvens"]["num2"].value;
    var snN = document.forms["displayEvens"]["num3"].value;
	for (var i = sN; i <= eN; i = i + snN){
		if(i % 2 == 0){
		document.getElementById("stepAnswer").innerText = console.log(i);
		}
	}
}
