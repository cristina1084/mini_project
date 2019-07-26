function resetForm(){
    document.getElementById("myForm").reset();
}

function percentMark(markarray,totalarray){
    var percent = Array();
    for(var j=0; j<6; j++){
        percent[j] = ( markarray[j] / totalarray[j] ) * 100;
    }
    return percent;
}

function grade(parray){
    var grade = Array();
    for(var k=0; k<6; k++){
        if (parray[k] >= 95)      grade[k] = 'S';
        else if (parray[k] >= 90) grade[k] = 'A+';
        else if (parray[k] >= 85) grade[k] = 'A';
        else if (parray[k] >= 80) grade[k] = 'B+';
        else if (parray[k] >= 75) grade[k] = 'B';
        else if (parray[k] >= 70) grade[k] = 'C+';
        else if (parray[k] >= 65) grade[k] = 'C';
        else if (parray[k] >= 55) grade[k] = 'D';
        else if (parray[k] >= 50) grade[k] = 'E';
        else if (parray[k] < 50)  grade[k] = 'F';
    }
    return grade;
}
function status(){

}

function generateMark(){
    var sub = Array();
    var mark = Array();
    var totm = Array();
    var percentArray = Array();
    var gradeArray = Array();
    var i;
    
    var name = document.getElementById("fullName").value;
    var sem = document.getElementById("sem").value;
    var ecode = document.getElementById("ecode").value;

    console.log(name,sem,ecode);

    for(i=0;i<6;i++){
        sub[i] = document.getElementById("sub" + (i+1)).value;
        mark[i] = parseFloat(document.getElementById("subm" + (i+1)).value);
        totm[i] = parseFloat(document.getElementById("tm" + (i+1)).value);
    }

    percentArray = percentMark(mark,totm);
    console.log(percentArray.toString());
    gradeArray = grade(percentArray);
    console.log(gradeArray.toString());
    
    //status();

    console.log(sub.toString());
    console.log(mark.toString());
    console.log(totm.toString());
    
    
    
}
