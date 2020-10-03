     // =================================================================================================================================================
//   //This using the fetch method
//   //===============================================================================================================================================

  function myFunc(){
  let myLocation =  document.querySelector("input").value;
  const url = "http://api.openweathermap.org/data/2.5/weather?q="+ myLocation+"&appid=f665b561afaa3be7f6dce22877daedb2&units=metric";

  fetch(url).then(function (response) {
    return response.json()
  }).then(function (data){


    var temp = data.main.temp
    var cloud = data.weather[0].description


      let html = "Temp now in "+ myLocation+": " + temp + " deg </br> Cloud : " + cloud;
      document.querySelector("h2").innerHTML = "<h2>" +html + "</h2>";

  }).catch(function (error) {
    console.log(error)
    })

  }


// //========================================================================================================================================
// // Below is API request using the XMLHttpRequest
// //===========================================================================================================================================
//
//   function myFunc(){
//   let myLocation =  document.querySelector("#location").value;
//   const url = "http://api.openweathermap.org/data/2.5/weather?q="+ myLocation+"&appid=f665b561afaa3be7f6dce22877daedb2&units=metric";
//
// let xhr = new XMLHttpRequest();
// let op = xhr.open("GET",url);
//  xhr.responseType = "json";
// xhr.onload = function (){
//   var res = xhr.response;
//   let error = res.cod;
//
//   if (error == 404){
//       document.querySelector("h1").innerHTML = "<h1> City not found </br> Enter correct city name</h1>";
// } else {
//
//     let temp = "Temp in "+ myLocation+ " : " + res.main.temp + ", </br> Weather : " + res.weather[0].description
//     console.log(temp)
//     document.querySelector("h1").innerHTML = "<h1>" +temp + "</h1>";
// }
// }
// xhr.send();
// // console.log(xhr)
//
// }

     //=======================================================================================================================================================
     // This is fetching the api using the arrow function
    //==========================================================================================================================================================
