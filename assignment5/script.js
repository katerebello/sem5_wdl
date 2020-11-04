function formvalidation(){
    // document.write("hello");
    var userid = document.validation.userid.value;
    var password = document.validation.pswd.value;
    var name = document.validation.name.value;
    var country = document.validation.country.value;
    var zipcode = document.validation.zipcode.value;
    var email = document.validation.email.value;
    var sex = document.validation.sex.value;

    if(useridvalid(userid,5,12)){
        if(passvalid(password,7,12)){
            if(namevalid(name)){
                if(countryvalid(country)){
                    if(zipcodevalid(zipcode)){
                        if(emailvalid(email)){
                            if(sexvalid(sex)){
                                    window.alert('Form Submitted Successfully!');
                            }
                        }
                    }
                }
            }
        }
    }

    
   
    function passvalid(name,min,max){
        if(name == ''){
            document.getElementById('display').innerHTML = 'password is required!';
            return false;
        }
        else if((name.length > max)|| (name.length < min)){
            document.getElementById('display').innerHTML = 'password length must be 5-7';
            return false;
        }
        else{
            return true;
        }
    }
    function useridvalid(name,min,max){
        if(name == ''){
            document.getElementById('display').innerHTML = 'password is required!';
            return false;
        }
        else if((name.length > max)|| (name.length < min)){
            document.getElementById('display').innerHTML = 'password length must be 5-7';
            return false;
        }
        else{
            return true;
        }
    }
    function namevalid(name){
        var re = /^[A-Za-z]+$/;
        if(name == ''){
            document.getElementById('display').innerHTML = 'username is required!'
            return false;
        }
        else if(name.match(re)){
            return true;
        }
        else{
            document.getElementById('display').innerHTML = 'Name must contain only characters!';
            return false;
        }
        
    }
    function countryvalid(country){
        if(country == 'default'){
            document.getElementById('display').innerHTML = 'select a country!';
            return false;
        }
        else{
            return true;
        }
    }
    function zipcodevalid(zipcode){
        var re = /^[0-9]*$/;
        if(zipcode==''){
            document.getElementById('display').innerHTML = 'zipcode required!';
            return false;
        }
        else if(zipcode.match(re)){
            return true;
        }
        else{
            document.getElementById('display').innerHTML = 'zipcode must contain only nunbers!';
            return false;
        }
    }
    function emailvalid(email){
        //var re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(email == ''){
            document.getElementById("display").innerHTML = 'Email address required!';
            return false;
        }
        else if(email.match(re)){
            return true;            
        }
        else{
            document.getElementById("display").innerHTML = 'Invalid Email address!';
            return false;
        }
    }
    function sexvalid(sex){
        if(sex == ''){
             document.getElementById("display").innerHTML = 'Gender required!';
            return false;
        }
        else{
            return true;
        }
    }

}