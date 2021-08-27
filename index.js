
function getBooks(){
    document.getElementById('output').innerHTML="";
    fetch("https://openlibrary.org/search/authors.json?q="+document.getElementById("input").value)
    .then(a =>a.json())
    .then(response=>{
        for(var i=0; i<10; i++){
            document.getElementById("output").innerHTML+="<section><details><summary>"+"Name: &nbsp"+response.docs[i].name+"</summary><p>Birth Date: &nbsp"+response.docs[i].birth_date+"<br> Top Work: &nbsp"+response.docs[i].top_work+"<br> Total Books: &nbsp"+response.docs[i].work_count+"</p></section></details>";  }
    });
}

//to call the function when enter is pressed

document.getElementById('input').onkeypress = function(e) {
    if(e.keyCode == 13) {
        getBooks();
    }
}