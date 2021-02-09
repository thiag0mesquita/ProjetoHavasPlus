$( document ).ready(function(){
    
    var parameter = getParameter()         
    if(parameter){
        getById(parameter)
    }else{
        getList()
    }

})

function getList() {                

    const options ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', options).then(response =>{
        response.json().then(list=> {
            var html = ''

            list.forEach(element => {
                html = html + '<div class="col-md-4 col-12 d-flex justify-content-center"><div class="card card-post" style="width: 18rem;"><div class="card-body">'+
                        `<h5 class="card-title">${element.title}</h5>`+
                        `<p class="card-text card-text-post">${element.body}</p>`+
                        `<a href="index.html?id=${element.id}" class="btn btn-primary">Leia mais</a>`+'</div></div></div>'
            });

            $('#view').html(html)
        })
    })

    
}

function getById(id) {
   
    const options ={  
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`, options).then(response =>{

        response.json().then(data=> {

            var html =  '<div class="col-12 d-flex justify-content-center"><div class="card card-id" style="width: 18rem;"><div class="card-body">'+
                        `<h5 class="card-title">${data[0].title}</h5>`+
                        `<p class="card-text card-text-id">${data[0].body}</p>`+
                        '<a href="index.html" class="btn btn-primary">Voltar</a>'+'</div></div></div>'
            
            $('#view').html(html)
        })
    })
}

function getParameter(){
    
    try {
        var url = window.location.href
        url = url.split("?")
        var parameter = url[1]
        parameter = parameter.split('=')
        return parameter[1]

    } catch (error) {
        return false
    }
}


