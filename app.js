document.getElementById('button1').addEventListener('click',getTextData);
document.getElementById('button2').addEventListener('click',getJsonData);
document.getElementById('button3').addEventListener('click',getApiData);

function getTextData(){
fetch('data.txt')
.then(function(res){
    return res.text();
}).then(function(data){
    document.getElementById('output').innerHTML=data
}).catch(function(err){
    console.log(err)
})

};


function getJsonData(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        const lists =data.map(function(d){
            return `<h6>${d.title}</h6>`;
        });
       // console.log(lists)
       document.getElementById('output').innerHTML=lists;
    })
}

function getApiData(){
    fetch('https://api.github.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const lists = data.map(function(user){
            return `<li>id - ${user.id}  name - ${user.login}</li>`
        })
        document.getElementById('output').innerHTML=lists
    })
}