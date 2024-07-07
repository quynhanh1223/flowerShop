const Contacts = JSON.parse(localStorage.getItem("formContact")) || []

const btn = document.getElementById("btnContact")
btn.addEventListener("click", function() {
    const name = document.getElementById("exampleInputName1").value
    const email = document.getElementById("exampleInputEmail1").value
    const content = document.getElementById("exampleInputContent1").value
    const formCont = {
        name: name,
        email: email,
        content: content
    }
    Contacts.push(formCont)
    
    localStorage.setItem("Contacts", JSON.stringify(Contacts))
})

