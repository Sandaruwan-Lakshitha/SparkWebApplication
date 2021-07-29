
//==========================================================================================
//To create user data object
const FormData = (first_name,last_name,contact_number,address,email,user_type,payment_method)=>{

    let data = new Object();
    data.first_name = first_name;
    data.last_name = last_name;
    data.contact_number = contact_number;
    data.address = address;
    data.email = email;
    data.user_type = user_type;
    data.payment_method = payment_method;

    return data;
}

//==========================================================================================
//Get value from radio buttons
function getRadioButtonValue(buttonName){

    let a=document.querySelector("input[name="+buttonName+"]:checked");
    if(a==null){
        return null;
    }else{
        return a.value;
    }

}

//==========================================================================================
//For Submit 
const onSubmit = (e,formElement,validationForm) =>{

    //input field names
    const fieldNames=["first Name","last Name","contact number","address","email","user type"];
    //error small tag names
    const errorDivId=["fname_err","lname_err","cnumber_err","address_err","email_err","usertype_err"];
    
    let firstName=formElement['fname'].value;
    let lastName=formElement['lname'].value;
    let contactNumber=formElement['cnumber'].value;
    let address=formElement['address'].value;
    let email=formElement['email'].value;
    let paymentMethod=formElement['pmethod'].value;
    let userType=getRadioButtonValue("usertype");
    
    if(validationForm(firstName,lastName,contactNumber,address,email,userType,fieldNames,errorDivId)){

        let userModel = FormData(firstName,lastName,contactNumber,address,email,userType,paymentMethod);
        console.log(userModel);
        form.reset();
        setTimeout(()=>{alert("User Added Successfully")},100);
        
    }
    
    e.preventDefault();

}