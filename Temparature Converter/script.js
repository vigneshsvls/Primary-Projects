function convert(){
var inp=document.getElementById('degree').value;
var convertedinp=parseFloat(inp);

let unittype=document.getElementById('units');
let unittypevalue=unittype.value;
let selectedtext=unittype.options[unittype.selectedIndex].text;


if(!isNaN(convertedinp))
    {
        if(selectedtext=="Fahrenheit")
            {
                var ans=(((convertedinp-32)*5)/9);
                document.getElementById('ans').value=ans+" °C";
            }
        else
            {
                var ans=(((convertedinp)*9)/5)+32;
                document.getElementById('ans').value=ans+" °F";
            }
    }
else 
    {
        alert('Please enter valid numbers');
    }
}