function resetForm(){
    document.getElementById("myForm").reset();
}

function generateMark(){
    var sub = Array();
    var mark = Array();
    var totm = Array();
    var i, j, k;
    
    var name = document.getElementById("fullName").value;
    var sem = document.getElementById("sem").value;
    var ecode = document.getElementById("ecode").value;

    console.log(name,sem,ecode);

    for(i=0;i<6;i++){
        sub[i] = document.getElementById("sub" + (i+1)).value;
        mark[i] = document.getElementById("subm" + (i+1)).value;
        totm[i] = document.getElementById("tm" + (i+1)).value;
    }
    console.log(sub.toString());
    console.log(mark.toString());
    console.log(totm.toString());
    
    
    
}
