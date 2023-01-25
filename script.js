console.log("hello")

let form = document.getElementById('form')
form.addEventListener("submit",function(event){
    event.preventDefault()
    let name = document.getElementById('name').value
    console.log(name)
    let btn = document.getElementById('button')
    btn.addEventListener('click',function(){
        form.innerHTML = "Thank you for registration"
    })
})

