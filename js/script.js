var users = [
    {
    name: 'Rakel',
    genero: 'F',
    hobby: 'Caminar',
    avatar: 'avatar1.png'
    },
    
     {
    name: 'Mariana',
    genero: 'F',
    hobby: 'Leer',
    avatar: 'avatar5.png'
    },
    
     {
    name: 'Samuel',
    genero: 'M',
    hobby: 'Jugar',
    avatar: 'avatar3.png'
    },
    
     {
    name: 'Jeremias',
    genero: 'M',
    hobby: 'Correr',
    avatar: 'avatar4.png'
    },
    
    ];

window.addEventListener('load', function(){
    //console.log('se ha cargado la pagina');
    
    function search (){
         //get hobby
        var hobbyFiled = document.getElementById('hobby');
        var hobby = hobbyFiled.value;
        console.log(hobby);
        
        //get genero
        var generoField = document.getElementById('genero');
        var selected = generoField.selectedIndex;
        var genero = generoField.options[selected].value;
        console.log(genero);
        
        var resultsHTML = '';
        
        var numUsers = users.length;
        
        for(var i = 0; i < numUsers; i++){
            //resultsHTML = resultsHTML + ' ' + users[i].name;
        
        if(genero == 'A' || genero == users[i].genero){
            if(hobby == '' || hobby == users[i].hobby){
            resultsHTML += '<div class="person-row"><img src="images/' + users[i].avatar + '" />\
            <div class="person-info"><div>'+ users[i].name +'</div><div>'+ users[i].hobby +'</div></div>\
            <button>add as Friend</button></div>';
            }
        }
        
        }
        
        results.innerHTML = resultsHTML;
        
    }
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    
    //console.log(searchBtn);
    
    searchBtn.addEventListener('click', function(){
        //console.log('click');
        
        //results.innerHTML = 'Hola <br/>mundo <div style="background-color">como estas</div>';
        
        //get hobby
        var hobbyFiled = document.getElementById('hobby');
        var hobby = hobbyFiled.value;
        console.log(hobby);
        
        //get genero
        var generoField = document.getElementById('genero');
        var selected = generoField.selectedIndex;
        var genero = generoField.options[selected].value;
        console.log(genero);
        
        var resultsHTML = '';
        
        var numUsers = users.length;
        
        for(var i = 0; i < numUsers; i++){
            //resultsHTML = resultsHTML + ' ' + users[i].name;
        
            resultsHTML += '<div class="person-row"><img src="images/' + users[i].avatar + '" />\
            <div class="person-info"><div>'+ users[i].name +'</div><div>'+ users[i].hobby +'</div></div>\
            <button>add as Friend</button></div>';
            
            
        }
        
        results.innerHTML = resultsHTML;
        
        });
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
    search();
    
});