
function getVal(e) {
    let customerOrder = e.innerHTML
    let a = document.getElementById("selecteditem")
    a.innerHTML = customerOrder

    document.getElementById("orderselect").value = e.innerHTML
    // console.log(customerOrder)
    
}

function register() {
    var model = {}

    model.FullName= document.getElementById('FullName').value
    model.cont = document.getElementById('cont').value
    model.address = document.getElementById('address').value
    model.email = document.getElementById('email').value
   

    console.log(model)
}

function submit_order() {
    var model = {}

   
    model.order = document.getElementById("orderselect").value 
    model.FullName= document.getElementById('FullName').value
    model.cont = document.getElementById('cont').value
    model.address = document.getElementById('address').value
    model.email = document.getElementById('email').value
    let key = firebase.database().ref("/").push().key
    model.key = key
    
    firebase.database().ref(key).set(model)

    console.log(model)
}





console.log(firebase.database)