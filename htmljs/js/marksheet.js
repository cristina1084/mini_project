//Script to generate marksheet

function percentMark(markarray,totalarray){   //Calculates the percentage of each subject
    var percent = Array();
    for(var j=0; j<6; j++){
        percent[j] = ( markarray[j] / totalarray[j] ) * 100;
    }
    return percent;
}

function grade(parray){                  //Assign grades to each subject based on percentage
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

function status(g){      //To check whether student has passed or failed
    return g == 'F';
}

function generateMarksheet(name1, sem1, ecode1, sub1, mark1, totm1, gradeArray1, s1){    //Generates Table
    var html; 
    html = ' <div class="card"> <div class="card-body"> <table class="table table-borderless"> ';
    html+= '<tr> <td> <label><h6> Name: </h6></label>'+ ' '+ name1 + ' </td> <td> <label> <h6> Sem: </h6></label> ' + ' ' + sem1;
    html+= '</td> <td> <label> <h6> Exam Code: </h6></label> '+ ' '+ ecode1+ ' </td> </tr> </table> ';
    html+= '<table class="table table-bordered"> <thead class="thead-dark"> <tr> <th> Subject </th> <th> Mark obtained </th> <th> Total Mark </th> <th> Grade </th> </tr></thead> <tbody>';

    for (var z=0; z<6; z++){
        html+='<tr>';
        html+='<td>' + sub1[z] + '</td> <td>' + mark1[z] + '</td> <td>' + totm1[z] + '</td> <td>' + gradeArray1[z] + '</td> </tr>';
    }
    html+= '<tbody> </table> <label class="text-right"> <h6> STATUS: ';

    if (s1 == 'Passed') html+= '<span class="text-success">';
    else html+= '<span class="text-danger">';

    html+=' '+ s1 + ' </span> </h6> </label> </div> </div>';

    document.getElementById("table").innerHTML = html;
}

function generateMark(){  //Main function
    var sub = Array();
    var mark = Array();
    var totm = Array();
    var percentArray = Array();
    var gradeArray = Array();
    var stat;
    var i,s;

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
    gradeArray = grade(percentArray);
    stat = gradeArray.find(status);

    if (stat == 'F') s = "Failed";
    else s = "Passed";
    
    generateMarksheet(name, sem, ecode, sub, mark, totm, gradeArray, s);
    
    console.log(sub.toString());
    console.log(mark.toString());
    console.log(totm.toString());
    console.log(percentArray.toString());
    console.log(gradeArray.toString());
    console.log(s);
    
}
