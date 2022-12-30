let form = document.getElementById("myform")
form.addEventListener('submit',function(f){
    f.preventDefault()
    let s = document.getElementById("search").value
     fetch("https://api.github.com/users/"+s).then((res)=>res.json()).then(data=>{
        console.log(data)
        document.getElementById("result").innerHTML= `<div class="card" >
        <img src="${data.avatar_url}" class="card-img-top" alt="..." style="border-radius: 50%;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.bio}</p>
          <a href="${data.html_url}" class="btn btn-primary">visit profile</a>
        </div>
      </div>`
     })
})
