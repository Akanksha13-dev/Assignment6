//Decorator Function
function FormatD(fun){
    return function(no){
    var id="DateTime"+no;
    fun(id);
    }
}
function FormatDate(id) {
    
        var dateTime = document.getElementById(id);
        console.log(id);
        let d=dateTime.innerHTML;
        dateTime.innerHTML = new Date(d).toLocaleString();
        
}
var i=0;
// VARIABLE controlCreate TO CONTROL CREATE BUTTON WHEN TO PROVIDE INPUT FIELD
var controlCreate=1;

//FUNCTION TO CREATE INPUT FIELD THROUGH WHICH WE CAN ADD ROWS TO TABLE
function createL(){
    
    if (controlCreate==1){
    controlCreate=0;
    var table1 = document.createElement("table");
    table1.setAttribute("id","taba"+i+"")
    tr = table1.insertRow(-1);
    tr.setAttribute('id','first');
    
    var j=0;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='email' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='tel' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='text' id="+j+" >";
    j+=1;
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "<input type='datetime' id="+j+" >";
    //butt0 to save the created row
    var butt0 = document. createElement("button");    
    //butt0.setAttribute('id', 'butt1');  
    butt0.textContent = 'Save1';
    butt0.setAttribute("onclick","support()");
    
   // to remove created row
    var butt1= document. createElement("button");    
    //butt1.setAttribute('id', '');  
    butt1.textContent = 'remove';
    butt1.setAttribute("onclick","remove()");
    var tabCell = tr.insertCell(-1);
    tabCell.appendChild(butt0);
    tabCell.appendChild(butt1);
    var divContainer = document.getElementById("showData");
    //divContainer.innerHTML = "";
    divContainer.appendChild(table1);
    
}}

//FUNCTION SUPPORT HELPS TO ADD NEWLY CREATED ROW IN TABLE
function support(){
    
    let li=[];
    for (var j = 0; j < col.length; j++) {
        var s=document.getElementById(j).value;
        document.getElementById(j).value="";
        //if(j==4){s=+s};
        li.push(s);
    }

    //validating ,the type of can be insert
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailP= re.test(li[4]);
    var phoneno = /^\d{10}$/;
    var phoneP=phoneno.test(li[5]); 
    for(var i=0;i<li.length;i++)
    {
        // if(li[0]!=+1){
        //     alert("Indexing field is empty or may be incorrect");
        //     break;
        // }
        if(li[1]=="" || li[1]==null)
        {
            alert("FirstName field is empty");
            break;
            
        }
        else if(li[2]=="" || li[2]==null){
            alert("MiddleName field is empty");
            break;
            
        }
        else if(li[3]=="" || li[3]==null){
            alert("LastName field is empty");
            break;
            
        }
       
        else if(!emailP){
            
            alert(" invalid email");
            break;
            
        }
        else if(!phoneP)
        {
            
            alert("invalid number");
            break;
        }
        else if(li[6]!=('SuperAdmin')&& li[6]!= 0 && li[6]!=('Admin')&& li[6]!=1 && li[6]!=('Subscriber')&& li[6]!=2) {
            alert("only insert roles SuperAdmin=0,Admin=1,Subscriber=2")
            break;
        }
        if(li[7]=="" || li[7]==null)
        {
            alert("Address field is empty");
            break;
        }
        if(li[8]=="" || li[8]==null){
            alert("date field is empty");
            break;
        }
        else if(li) {
            
            //const va=new changeL();
            let object={'ID':number=li[0],'First__Name':string=li[1],'Middle__Name':string=li[2],
            'Last__Name':string=li[3],
            'Email':string=li[4],
            'Phone_Number':number=li[5],
            'Role':Role=li[6],
            'Address':string=li[7],
            'DateTime':string=li[8]  }
            
            //va.create(per);
            //data.push(per);
            addUser(object).then((message) => {
                console.log(message) ;   
            }).catch(()=> {alert("Unexpected Error Occured !")})  
            CreateTableFromJSON();
            //createRFT(.length-1,ListS,k);
            // var DT=FormatD(FormatDate);
            // let rowno = ListS.length;   
            // DT(rowno);
             break;
        }        
    }
    console.log(li);
   
}

//TO REMOVE INPUT ROW AFTER YOU DON'T WANT TO INSERT ANY ROW
function remove()
{   
    //var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("taba"+i+"").deleteRow(0);  
    controlCreate=1;
    i+=1;
}

//SELECT FUNCTION ALLOWS TO PROCEED FOR RUD AMOUNG CRUD OPERATIONS
function selectF(r){
    document.getElementById("retrive"+r+"").style.visibility ="visible";
    document.getElementById("update"+r+"").style.visibility ="visible";
    document.getElementById("delete"+r+"").style.visibility ="visible";
    document.getElementById("select"+r+"").style.visibility ="hidden";
    document.getElementById("row"+r+"").style.backgroundColor = "grey";
    

}

//CRUD RETRIVE FUNCTION TO  RETRIVE PARTICULAR ROW INFORMATION
function retriveV(r){
    let ob=new changeL();
    ob.read(r);
}

//CRUD DELETE FUNCTION
function deleteF(r){
    //var i = r.parentNode.parentNode.rowIndex;
    //document.getElementById("tab").deleteRow(r);
    let ob=new changeL(); 
    ob.delete(r);

}

// CRUD UPDATE FUNCTION ,AFTER YOU CAN CANCEL OR SAVE USING CANCEL AND SAVE FUNCTION
function update(no){
    let ob=new changeL();
    ob.update(no);
}
function saveU(no,id){

    var ID=document.getElementById("ID_"+no).value;
    var FirstName=document.getElementById("First_Name"+no).value;
    var MiddleName=document.getElementById("Middle_Name"+no).value;
    var LastName=document.getElementById("Last_Name"+no).value;
    var email =document.getElementById("Email_"+no).value ;  
    var Phone_N =document.getElementById("Phone_Number_"+no).value ; 
    var role =document.getElementById("Role_"+no).value ; 
    var address =document.getElementById("Address_"+no).value ;
    var date =document.getElementById("Date_"+no).value ;

    document.getElementById("ID"+no).innerHTML=ID;                
    document.getElementById("First__Name"+no).innerHTML=FirstName;
    document.getElementById("Middle__Name"+no).innerHTML=MiddleName;
    document.getElementById("Last__Name"+no).innerHTML=LastName;
    document.getElementById("Email"+no).innerHTML=email ;  
    document.getElementById("Phone_Number"+no).innerHTML=Phone_N ; 
    document.getElementById("Role"+no).innerHTML=role ; 
    document.getElementById("Address"+no).innerHTML=address ;
    document.getElementById("DateTime"+no).innerHTML=date;
    var li=[ID,FirstName,MiddleName,LastName,email,Phone_N,role,address,date ];
    var object=new model1(li[0],li[1],li[2],li[3],li[4],li[5],li[6],li[7],li[8]);
    editUser(id, object).then((message) => {
        console.log(message) ;   
    }).catch(()=> {alert("Unexpected Error Occured !")})       
    
    document.getElementById("select"+no+"").style.visibility ="visible";
    document.getElementById("retrive"+no+"").style.visibility ="hidden";
    document.getElementById("update"+no+"").style.visibility ="hidden";
    document.getElementById("delete"+no+"").style.visibility ="hidden";    
    document.getElementById("saveUpdate"+no).style.visibility="hidden";
    document.getElementById("cancelUpdate"+no).style.visibility="hidden";
    document.getElementById("row"+no+"").style.backgroundColor = "white";
    CreateTableFromJSON();

}
function cancelU(no){
    document.getElementById("ID"+no).innerHTML=li[0];
    document.getElementById("First__Name"+no).innerHTML=li[1];
    document.getElementById("Middle__Name"+no).innerHTML=li[2];
    document.getElementById("Last__Name"+no).innerHTML=li[3];
    document.getElementById("Email"+no).innerHTML=li[4] ;  
    document.getElementById("Phone_Number"+no).innerHTML=li[5] ; 
    document.getElementById("Role"+no).innerHTML=li[6]; 
    document.getElementById("Address"+no).innerHTML=li[7];
    document.getElementById("DateTime"+no).innerHTML=li[8];    
    
    document.getElementById("select"+no+"").style.visibility ="visible";
    document.getElementById("retrive"+no+"").style.visibility ="hidden";
    document.getElementById("update"+no+"").style.visibility ="hidden";
    document.getElementById("delete"+no+"").style.visibility ="hidden";    
    document.getElementById("saveUpdate"+no).style.visibility="hidden";
    document.getElementById("cancelUpdate"+no).style.visibility="hidden";
    document.getElementById("row"+no+"").style.backgroundColor = "white";
}
