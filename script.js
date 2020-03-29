/* global axios*/

function charClass(){
    axios.get(
        "https://www.dnd5eapi.co/api/"+"classes"
    ).then(function(response){
        let data = response.data.results[4]["name"]
        console.log(data)
        $(".class").html(data)
    })
}


function charProficiency(){
    axios.get(
        "https://www.dnd5eapi.co/api/"+"classes"+"/fighter"
    ).then(function(response){
        let data = response.data
        console.log(data)

    })
}