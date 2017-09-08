function clearErrors(){
    for(var loopCounter=0; loopCounter < document.forms["displayEvens"]
    .elements.length; loopCounter ++){ 
        
        if(document.forms["displayEvens"].elements[loopCounter]
        .parentElement.classname.indexOf('has-') != -1){

            document.forms("displayEvens").elements[loopCounter]
            .parentElement.classname = "form-group";
        }
    }
}