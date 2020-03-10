
function getAndParseJson(uInput){
    let url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?city=";
    let fullUrl = url + uInput + '&agency=NYPD';


    $.ajax({
    url: fullUrl,
    type: "GET",
    // success: function (){
    //     alert('Success!'); 
    //   }
    }).then((data)=> {
            console.log(data.length + " records from the database");
            console.log(data);
            let response = data;
            $("#list").empty();

            for (let i = 1; i <= $("#textArea").val(); i++) {

                let button = document.createElement('button');
                button.textContent = "info";
                button.classList.add('btn_info');
                
                document.querySelector("#list").append(i + ') ' + response[i].city + ' ' + response[i].descriptor + '   ');
                document.querySelector("#list").append(button);
                $("#list").append('<br />');
                document.querySelector("#list").append();
                $("#list").append('<br />');


               let p_info = document.createElement('p');
               p_info.textContent = response[i].resolution_description;
               p_info.id = 'pInfo_' + i;


               
              
               document.querySelector("#list").append(p_info);

               $('#pInfo_' + i).hide();

               button.addEventListener('click', function(evt){

                    $('#pInfo_' + i).toggle();
               })

               
            }

        }
    );
}

$('#brooklyn').click(function () {        
    getAndParseJson('BROOKLYN');
});
$('#manhattan').click(function () {        
    getAndParseJson('MANHATTAN');
});
$('#queens').click(function () {        
    getAndParseJson('QUEENS');
});
$('#bronx').click(function () {        
    getAndParseJson('BRONX');
});
$('#statenIsland').click(function () {        
    getAndParseJson('STATEN ISLAND');
});


// initMap(addMarker({lat:40.579021,lng:-74.151535}));
// init({lat:40.579021,lng:-74.151535});
// new york 40.7128° N, 74.0060° W

function initMap() {
    
    let options = {
        zoom: 10,
        center: { lat: 40.7128, lng: -74.0060}   
    }
    
    let map = new google.maps.Map(document.getElementById('map'),options);
    
    addMarker({lat:40.579021,lng:-74.151535});
    addMarker({lat:40.7831,lng:-73.9712});
    
    function addMarker (coords) {
        
        let marker = new google.maps.Marker({
            position: coords,
            map:map,
            icon:'http://maps.google.com/mapfiles/kml/shapes/caution.png'
        });
    }
}



    //     let marker = new google.maps.Marker({
//         position:{lat:42.4668,lng:-70.9495},
//         map:map,
//         icon:'http://maps.google.com/mapfiles/kml/shapes/caution.png'
//     });
    
//     let infoWindow = new google.maps.InfoWindow ({
//         content:'Hell Yeah'
//     });

    // marker.addEventListener('click',function(){
    //     infoWindow.open(map, marker);
    // });

