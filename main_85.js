menu_list_array = [ "Veg Margarita Pizza",                  
"Pollo Tandoori Pizza", "Veg Suprema Pizza", "Paneer Tikka", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];
function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("mostrar_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("add_suggestion").value;
    //Usa la función push() para llevar el elemento a la menu_list_array.
    menu_list_array.push(item);
}

