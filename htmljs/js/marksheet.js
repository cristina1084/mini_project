//Script to generate marksheet

function resetTable(){
    document.getElementById("table").innerHTML = ' ';

}
function percentMark(markarray,totalarray){   //Calculates the percentage of each subject
    var percent = Array();
    for(var j=0; j<6; j++){
        //if(markarray[j]!=null && totalarray[j]!=null)  //!isNaN(markarray[j])&&!isNaN(totalarray[j])
        percent[j] = ( markarray[j] / totalarray[j] ) * 100;
    }
    return percent;
}

function grade(parray){                  //Assign grades to each subject based on percentage
    var grade = Array();
    for(var k=0; k<6; k++){
        //if(parray[k]!=null) //!isNaN(parray[k])    
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
    return grade.filter(function(e) {return e!=null;});       //filters empty value
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
    html+= '<tbody> </table> <label class="float-right"> <h5> STATUS: ';

    if (s1 == 'Passed') html+= '<span class="text-success">';
    else html+= '<span class="text-danger">';

    html+=' '+ s1 + ' </span> </h5> </label> </div> </div>';

    document.getElementById("table").innerHTML = html;
}

function generateMark(){  //Main function
    var sub = Array();
    var mark = Array();
    var totm = Array();
    var percentArray = Array();
    var gradeArray = Array();
    var stat;
    var a,b,c,s;
    var name = document.getElementById("fullName").value;
    var sem = document.getElementById("sem").value;
    var ecode = document.getElementById("ecode").value;

    if (name!="" && sem!="" && ecode!="") {
        for(var i=0;i<6;i++){
            //a = document.getElementById("sub" + (i+1)).value;
            //b = parseFloat(document.getElementById("subm" + (i+1)).value);
            //c = parseFloat(document.getElementById("tm" + (i+1)).value);
            //if ((a != null && b != null && c != null) || (a != "" && (!isNaN(b)) && (!isNaN(c)))){
            sub[i] = document.getElementById("sub" + (i+1)).value;//a;
            mark[i] = parseFloat(document.getElementById("subm" + (i+1)).value);//b;
            totm[i] = parseFloat(document.getElementById("tm" + (i+1)).value);//c;
            //}
            //if(mark[i] > totm[i]) document.getElementById("fb1").innerHTML = "Total mark is less than obtained mark";
        }
    
        percentArray = percentMark(mark,totm);
        gradeArray = grade(percentArray);
        stat = gradeArray.find(status);

        if (stat == 'F') s = "Failed";
        else s = "Passed";
        
        var sub2 = sub.filter(function(p) {return p!="";});   //filters empty string

        if(sub2.length==6 && gradeArray.length == 6)
            generateMarksheet(name, sem, ecode, sub2, mark, totm, gradeArray, s);

    } 
    
    /* console.log(name,sem,ecode);
    console.log(sub);
    console.log(mark);
    console.log(totm);
    console.log(percentArray);
    console.log(gradeArray);
    console.log(s); */
    
}
