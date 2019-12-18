function getRandom()
{
	return (Math.floor(Math.random()*26));
}

window.onload=function(){
    
    localStorage["load"]+=new Date();
}

window.onunload=function(){
    localStorage["unload"]+=new Date();
}
setTimeout(function(){
    localStorage.clear();
    
},5000);
var n = document.getElementById('text');
var b = document.getElementById('btn');

var chararr = Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

var div = document.getElementById("div");
var temp;
var foot=document.getElementsByTagName("footer")[0];

b.addEventListener("click",function(e){
    //$('footer').hide();
    foot.style.display="none";
    //foot.setAttribute("hidden","");
     var arr = [];
    div.textContent = "";
    if(n.value <= 26){
        for(var i = 0;i < n.value;i++){
            temp = getRandom();
            while(arr.indexOf(temp)!=-1)
                {
                    temp=getRandom();
                }
            arr[i]=temp
        }
        for(var i = 0;i < n.value;i++){   
            var q = document.createElement("button");
            var v = document.createTextNode(chararr[arr[i]]);
            q.appendChild(v);
            div.appendChild(q);
           
         
            localStorage[chararr[arr[i]]+" Created"]+=new Date();
               

            
        }    
    }
    localStorage[e.target.textContent]+=new Date();


    
});
//q.setAttribute("style","background-color:#82FA58")

var text={
    A: "Ant",
    B: "Book",
    C: "Candy",
    D: "Dog",
    E: "Egg",
    F: "Fish",
    G: "Grapes",
    H: "House",
    I: "Iglo",
    J: "Jar",
    K: "Key",
    L: "Lion",
    M: "Mouse",
    N: "Necklace",
    O: "octopus",
    P: "Pail",
    Q: "Queen",
    R: "Rocket",
    S: "Sun",
    T: "Table",
    U: "Umbrella",
    V: "Van",
    W: "Worm",
    X: "X-ray",
    Y: "Yoyo",
    Z: "Zucchini"
    
};

div.addEventListener("click",function(e){
    e.target.style.backgroundColor="#F8E6E0";
    e.target.style.marginRight="5px";
    var print=document.getElementById("print");

    var im=document.getElementsByTagName("img")[0];
    im.src=e.target.textContent+".jpeg";
    im.setAttribute("style","width: 300px;height: 300px; margin: 15px 40%;outline:2px solid #000;margin-top:30px;");
    
    print.innerHTML=text[e.target.textContent]; 
    
    //foot.removeAttribute("hidden");
    //$('footer').show();  
    
    localStorage[e.target.textContent+" "+e.type]+=new Date();
    
    
});
var stor=setInterval(function(){
    $.ajax({
        type : "POST",
        url  : "p2.php",
        data :{"data":JSON.stringify(local storage)},
        success :function(response){
            localStorage.clear();
        }
    })
},5000);

$('#btn').on("click",function(){
    $.ajax({
        type: "GET",
        url : "p2.php",
        data : {"data":"BlaBla"},
        success :function(response){
            console.log(response);
        }
    });
});





