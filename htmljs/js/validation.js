function validateMark1(id1,f1){
    var v1 = parseFloat(document.getElementById(id1).value);
    
    if(v1<0)  document.getElementById(f1).innerHTML="<h6 style='font-size:x-small;'>Marks should not negative</h6>";
    else document.getElementById(f1).innerHTML="";
}

function validateMark2(id2,id3,f2){
    var v2 = parseFloat(document.getElementById(id2).value);
    var v3 = parseFloat(document.getElementById(id3).value);
    
    if(v3==0)  document.getElementById(f2).innerHTML="<h6 style='font-size:x-small;'>Total marks should not be 0</h6>";
    else if(v3<0)  document.getElementById(f2).innerHTML="<h6 style='font-size:x-small;'>Total Marks should not negative</h6>";
    else if(v2>v3) document.getElementById(f2).innerHTML="<h6 style='font-size:x-small;'>Total marks should be greater than marks obtained</h6>";
    else document.getElementById(f2).innerHTML="";
}