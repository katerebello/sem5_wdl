var calculate = function(){
    /*document.getElementById('total').style.visibility = "visible";*/

    var sub1 = parseInt(document.getElementById('s1').value);
    var sub2 = parseInt(document.getElementById('s2').value);
    var sub3 = parseInt(document.getElementById('s3').value);
    var sub4 = parseInt(document.getElementById('s4').value);
    var sub5 = parseInt(document.getElementById('s5').value);

    /*calculate total*/
    var total  = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById('total').value = total;
    
    /*calculate percentage*/
    var p = total/5;
    document.getElementById('percent').value = p;

    /*calculate grade*/
    var grade  = document.getElementById('grade');
    if(p >= 75){
        grade.value = 'Distinction';
    }
    else if(p >=60 && p<75){
        grade.value = 'First Class';
    }
    else if(p >=50 && p<60){
        grade.value = 'Second Class';
    }
    else if(p >=40 && p<50){
        grade.value = 'Pass';
    }
    else{
        grade.value = 'Fail';
    }
    document.getElementById("showgrade").style.visibility = 'visible';
}