let changed_theme = false

function change_theme(){
    if(changed_theme==false){
        document.getElementById("mainbody").classList.add("dark-mode");
        changed_theme = true;
    }
    else{
        document.getElementById("mainbody").classList.remove("dark-mode");
        changed_theme = false;
    }
}
