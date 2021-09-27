function validate(){
     user=document.getElementById("name").value;
     email=document.getElementById("email").value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var nameformat = /^[A-Za-z ]+$/;
     if(user=="")
     {
         alert("name can't be blank");
     }
     else{

        if(user.match(nameformat))
             {

             }
        else
            {
            alert("Invalid name");
             }
     }
     if(email=="")
     {
         alert("email can't be blank");
     }
     else{
        if(email.match(mailformat))
        {
   
        }
        else{
            alert("Invalid email format");
        }

     }
     
     
}