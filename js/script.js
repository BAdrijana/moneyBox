
// select only one
function selectOnlyThis(id){
    var onlyOne = document.getElementsByClassName("onlyOne");
    
    Array.prototype.forEach.call(onlyOne,function(el){
        el.checked = false;
    });
    id.checked = true;
  }

// Toggle Price 

let mob = document.querySelectorAll(".mob");
let toggle = document.getElementsByClassName("toggle");

console.log(mob);
for(i = 0; i < mob.length; i++){
mob[i].addEventListener('click', function(){
       
        let container = document.getElementById(this.dataset.container);
        // console.log(container);
        if (!container.classList.contains('active')) {
           
            container.classList.toggle('active');
            
            
          }

    });
      
  
  };
  

//   location

// var geocoder;
// if (navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// }

//Get the latitude and the longitude;
// function successFunction(position) {
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;
//   console.log(lat);
//   city(lat, lng);
// }

// function errorFunction() {
//   console.log("Geocoder failed");
// }
function geoip(json){

    var continent_code = json.continent_code;
    console.log(continent_code);

    let priceV = document.querySelectorAll(".price");

    for(var i = 0; i < priceV.length; i++){
        // console.log(priceV);
        if(continent_code == "EU"){
            priceV[i].innerHTML = "€";
         }else if(continent_code == "UK"){
                 priceV[i].innerHTML = "£";
             } else {
                 priceV[i].innerHTML = "$";
             }    
        }
   



}

