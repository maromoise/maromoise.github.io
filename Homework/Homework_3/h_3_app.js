window.onload = function(){
    
    document.querySelector("#numbers").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode<48 || ev.charCode>57)
            ev.preventDefault();
    }

    document.querySelector("#letters").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode<65){
            ev.preventDefault();
        } else if(90 < ev.charCode && ev.charCode < 97){
            ev.preventDefault();
        } else if(122 < ev.charCode){
            ev.preventDefault();
        }
    }

    document.querySelector("#upper").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode < 97 || 122 < ev.charCode){
            ev.preventDefault();
        }
    }

    document.querySelector("#lower").onkeypress=function(ev){
        
        if(!ev)
            ev = window.event;
        
        console.log(ev.charCode);
        if(ev.charCode < 65 || 90 < ev.charCode){
            ev.preventDefault();
        }
    }
}