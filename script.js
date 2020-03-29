/* global axios*/

function testAPI(){
    axios.get(
        "https://www.dnd5eapi.co/api/"
    ).then(function(response){
        console.log(response.data)
    })

}