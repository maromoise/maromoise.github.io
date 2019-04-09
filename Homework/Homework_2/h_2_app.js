window.onload = function(){
    
    document.querySelector("#txt1").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode<48 || ev.charCode>57)
            ev.preventDefault();
    }
    document.querySelector("#txt2").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode<48 || ev.charCode>57)
            ev.preventDefault();
    }
}