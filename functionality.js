var form = document.getElementById('contactform');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var message= form.elements.message.value;


    
var Database=firebase.database();

Database.ref('contacts').push({
       name:name,
       email:email,
       message:message,
});
form.reset();

 alert (message = "Thank You, your message will be responded soon");
});