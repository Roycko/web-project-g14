function Validition() {
    console.log('start');
        var inpObj = document.getElementById("type");
        var inpObj2 = document.getElementById("Range_of_Ages");
        var inpObj3 = document.getElementById("Food_prefernces");
        var inpObj4 = document.getElementById("Amount");
        var inpObj5 = document.getElementById("firstname");
        var inpObj6 = document.getElementById("lastname");
        var inpObj7 = document.getElementById("email");
        var inpObj8 = document.getElementById("Phone");
        var inpObj9 = document.getElementById("Address");
        var inpObjV = document.getElementById("type").value;
        var inpObjV2 = document.getElementById("Range_of_Ages").value;
        var inpObjV3 = document.getElementById("Food_prefernces").value;
        var inpObjV4 = document.getElementById("Amount").value;
        var inpObjV5 = document.getElementById("fname").value;
        var inpObjV6 = document.getElementById("Lname").value;
        var inpObjV7 = document.getElementById("email").value;
        var inpObjV8 = document.getElementById("Phone").value;
        var inpObjV9 = document.getElementById("Address").value;


        if(!inpObjV4 || !inpObjV5 || !inpObjV6 || !inpObjV7 || !inpObjV8 || !inpObjV9){
            document.getElementById("mandatory").innerHTML = 'fill ALL the field';
            return false;
        }
}