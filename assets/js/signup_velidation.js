function inputValidity() {
    console.log('start');
        var inpObj = document.getElementById("user_name");
        var inpObj2 = document.getElementById("Pass");
        var inpObjV = document.getElementById("user_name").value;
        var inpObj2V = document.getElementById("Pass").value;
        if( !inpObjV||  !inpObj2V){
            document.getElementById("mandatory").innerHTML = 'fill ALL the Mandatory field';
            return false;
        }
        if (!inpObj.checkValidity() || inpObj=="") {
        document.getElementById("errorName").innerHTML = 'User Name: '+inpObj.validationMessage;
             return false;
        }
        if (!inpObj2.checkValidity() |עגל| inpObj2=="") {
            document.getElementById("errorPass").innerHTML ='Passward: ' +inpObj2.validationMessage;
            return false;
            } 
        if(inpObj2.checkValidity()& inpObj.checkValidity() & inpObjV& inpObj2V )
        {
            if(input)
            document.getElementById("errorPass").innerHTML = "Input OK";
            return true;
        }
        
    } 