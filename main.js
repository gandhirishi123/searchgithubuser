let form = document.getElementById("myform")
form.addEventListener('submit',function(f){
    f.preventDefault()
    let s = document.getElementById("search").value
     fetch("https://api.github.com/users/"+s).then((res)=>res.json()).then(data=>{
        console.log(data)
        document.getElementById("result").innerHTML= `<div class="card" >
        <img src="${data.avatar_url}" class="card-img-top" alt="..." style="border-radius: 50%; padding: 10%;width: 50rem;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.bio}</p>
          <p class="card-text">Followers ${data.followers}</p>
          <a href="${data.html_url}" class="btn btn-primary">visit profile</a>
        </div>
      </div>`
     })
})
f1()
function f1(){
     fetch("https://api.github.com/users/gandhirishi123").then((res)=>res.json()).then(user=>{
        console.log(user)
        document.getElementById("result").innerHTML= `<div class="card" >
        <img src="${user.avatar_url}" class="card-img-top" alt="..." style="border-radius: 50%; padding: 10%;width: 55rem;">
        <div class="card-body">
          <h1 class="card-title">${user.name}</h1>
          <p class="card-text">${user.bio}</p>
          <p class="card-text">followers ${user.followers}</p>
          <a href="${user.html_url}" class="btn btn-primary">visit profile</a>
        </div>
      </div>`
     })
}
