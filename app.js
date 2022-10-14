let btn = document.getElementsByClassName("seeker")
let characters = JSON.parse(file).results
let input_character = document.getElementById("input_character")
let resultados = document.getElementById("results")

function search_character_click(){
 let character = search_character(input_character.value)
 
 results.innerHTML =  `
 <p>
 <span style="color: red">Nombre: ${character.name} </span> <br />
 <span style="color: red">Birthyear: ${character.birth_year} </span> <br />
 <span style="color: red">Gender: ${character.gender} </span> <br />
 <span style="color: red" >Eyes: ${character.eye_color} </span> <br />
 <span style="color: red" >Hair: ${character.hair_color} </span> <br />
 <span style="color: red" >Height: ${character.height} </span> <br />
 </p>
 `
}

function search_character (character_name){
    let distancia = character_name.length;

    if(character_name === ""){
        return alert("Escribe el nombre de un Star wars")
    }
    
    else{
    for (let i = 0; i < characters.length; i++) {
        
        if (characters[i].name.substring(0,distancia).toLowerCase() === character_name.toLowerCase()) 
        return characters[i]
        }
    }
}


