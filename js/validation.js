//validation for firstname and lastname field. only allow for [a-z A-Z]
function validateNameFields(field,fieldName,errorDivId){

    let state = true;
    let pattern= /^([A-Za-z]{2,255})$/;

    if(field == ""){
        document.getElementById(errorDivId).innerHTML="Please enter your "+fieldName+"...";
        state=false;
    }else if(!pattern.test(field)){
        document.getElementById(errorDivId).innerHTML="Please enter valid "+fieldName+"...";
        state=false;
    }
    else{
        document.getElementById(errorDivId).innerHTML="";
        
    }
    return state;
}
//==========================================================================================
//validation dor contact number.this contact number  should be containe 10 digits.
function validateContactNumber(field,fieldName,errorDivId){

    let state=true;
    let pattern= /^([0][7][0-9]{1}[0-9]{7})$/;

    if(field == ""){
        document.getElementById(errorDivId).innerHTML="Please enter your "+fieldName+"...";
        state=false;
    }else if(!pattern.test(field)){
        document.getElementById(errorDivId).innerHTML="Please enter valid "+fieldName+"...";
        state=false;
    }
    else{
        document.getElementById(errorDivId).innerHTML="";
    }
    
    return state;
}

//==========================================================================================
//valodation for address . only allow for [a-z A-Z 0-9 / &""()-]  5 < charactors < 255
function validateAddress(field,fieldName,errorDivId){

    let state=true;
    let pattern= /^([A-Za-z0-9/\\ #&""()--\n]{5,255})$/;

    if(field == ""){
        document.getElementById(errorDivId).innerHTML="Please enter your "+fieldName+"...";
        state=false;
    }else if(!pattern.test(field)){
        document.getElementById(errorDivId).innerHTML="Please enter valid "+fieldName+"...";
        state=false;
    }else{
        document.getElementById(errorDivId).innerHTML="";
    }
    
    return state;
}

//==========================================================================================
//validation for email address field.
function validateEmail(field,fieldName,errorDivId){

    let state= true;
    let pattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(field == ""){
        document.getElementById(errorDivId).innerHTML="Please enter your "+fieldName+"...";
        state=false;
    }else if(!pattern.test(field)){
        document.getElementById(errorDivId).innerHTML="Please enter valid "+fieldName+"...";
        state=false;
    }else{
        document.getElementById(errorDivId).innerHTML="";
    }

    return state;
}
//==========================================================================================
//validation for user type field.
function validateUserType(field,fieldName,errorDivId){

    let state =true;

    if(field == "" || field == null){
        document.getElementById(errorDivId).innerHTML="Please select your "+fieldName+"...";
        state=false;
    }else{
        document.getElementById(errorDivId).innerHTML="";
    }
    return state;
}


//==========================================================================================
//Form validation function 
function validationForm(fname,lname,cnumber,address,email,usertype,fieldNames,errorDivId){
    
    let val_fname=validateNameFields(fname,fieldNames[0],errorDivId[0]);
    let val_lname=validateNameFields(lname,fieldNames[1],errorDivId[1]);
    let val_cnumber=validateContactNumber(cnumber,fieldNames[2],errorDivId[2]);
    let val_address=validateAddress(address,fieldNames[3],errorDivId[3]);
    let val_email=validateEmail(email,fieldNames[4],errorDivId[4]);
    let val_usertype=validateUserType(usertype,fieldNames[5],errorDivId[5]);

    if(val_address && val_cnumber && val_email && val_fname && val_lname && val_usertype){
        return true;
    }

    return false;
}