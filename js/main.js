
var NameInpute = document.getElementById("NameInpute");
var URLInpute = document.getElementById("URLInpute");
// var message = document.getElementById("message")
// var x = document.getElementById("x")
BookmarkerList = [];


if( localStorage.getItem("Bookmarkers") !=null ){
    BookmarkerList = JSON.parse( localStorage.getItem("Bookmarkers") );
    displayData();
}


function addBookmarker(){
    if( validationName() && validationUrl() ){
        var Bookmarker = {
        name : NameInpute.value,
        url : URLInpute.value,
    };

    BookmarkerList.push(Bookmarker);
    localStorage.setItem("Bookmarkers" , JSON.stringify(BookmarkerList))


}
else{
    message.classList.remove("d-none")
        

}
clreaForm();

displayData();


}

function clreaForm(){
    NameInpute.value = "";
    URLInpute.value = "";
}



function displayData(){

    var cartona = "";

    for( var i = 0; i < BookmarkerList.length; i++ ){
        cartona += `
       <tr>
       <td>${i}</td>
        <td>${BookmarkerList[i].name}</td>
        <td>
        <a>
        <button onclick = "visitItem(${i})" class="btn btn-warning btn-sm">
              <a href=" ${BookmarkerList[i].url}" >
              visit
              </a>
        </button>
        </a>
        </td>
        <td>
        <button onclick ="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`
    }
    
    document.getElementById("tableBody").innerHTML = cartona;


}

function visitItem(index){
    URLInpute.value;
}



function deleteItem(index){

    BookmarkerList.splice( index , 1 );
    displayData();
    console.log(BookmarkerList);
    localStorage.setItem("Bookmarkers" , JSON.stringify(BookmarkerList))


}

function cancel(){
    message.classList.add("d-none")
}



function validationName(){
    var text = NameInpute.value;
    var regexName = /^[a-z]{3,10}$/;


    if( regexName.test( text ) ){
        NameInpute.classList.add("is-valid")
        NameInpute.classList.remove("is-invalid")
        return true
    }
    else{
        NameInpute.classList.add("is-invalid")
        NameInpute.classList.remove("is-valid")
        return false
    }
}

function validationUrl(){
    var text = URLInpute.value;
    var regexUrl = /^www.[a-z]{1,}.com$/
    

    if( regexUrl.test( text ) ){
        URLInpute.classList.add("is-valid")
        URLInpute.classList.remove("is-invalid")
        return true
    }
    else{
        URLInpute.classList.add("is-invalid")
        URLInpute.classList.remove("is-valid")
        return false
    }
}