function Fvalid()                                    
{ 
    var backred = document.getElementById(.redback)
    var name = document.forms["form"]["nom"];               
    var email = document.forms["form"]["email"];    
    var phone = document.forms["form"]["telephone"];  
    var wsite = document.forms["form"]["website"];  

    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }      
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }     
    if (wsite.value == (""))                 
    { 
        alert("Mettez un site web valide."); 
        email.focus(); 
        return false; 
    }    
    if (phone.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        phone.focus(); 
        return false; 
    }                         
    Fsub() 
}
function Fsub() {
    document.getElementById("form").submit();
}