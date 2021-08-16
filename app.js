function setCondition(AQI){
    if(AQI<=50)return "Good";
    if(AQI<=100)return "Moderate";
    if(AQI<=150)return "Unhealthy for Sensitive Groups";
    if(AQI<=200)return "Unhealthy";
    if(AQI<=300)return "Very Unhealthy";
    return "Hazardous";
}

fetch('https://api.weatherbit.io/v2.0/current/airquality?postal_code=20001&country=US&key=c6adc894dec64406b46fb37a267ce1bf')
    .then(response => response.json())
    .then(data => {
        document.getElementById('destination').textContent=20001;
        document.getElementById('AQI').textContent=data['data'][0]['aqi'];
        document.getElementById('condition').textContent=setCondition(data['data'][0]['aqi']);
        document.getElementById('PM25').textContent=data['data'][0]['pm25'].toFixed(1);
        document.getElementById('PM10').textContent=data['data'][0]['pm10'].toFixed(1);
        document.getElementById('O3').textContent=data['data'][0]['o3'].toFixed(1);
        document.getElementById('NO2').textContent=data['data'][0]['no2'].toFixed(1);
        document.getElementById('SO2').textContent=data['data'][0]['so2'].toFixed(1);
        document.getElementById('CO').textContent=data['data'][0]['co'].toFixed(1);
    })
const button=document.getElementById('icon');

button.addEventListener('click',function(){
    let ZIP=document.getElementById('search_box').value;
    if(ZIP!=""){
        fetch('https://api.weatherbit.io/v2.0/current/airquality?postal_code='+ZIP+'&country=US&key=c6adc894dec64406b46fb37a267ce1bf')
            .then(response => response.json())
            .then(data => {
                document.getElementById('destination').textContent=ZIP;
                document.getElementById('AQI').textContent=data['data'][0]['aqi'];
                document.getElementById('condition').textContent=setCondition(data['data'][0]['aqi']);
                document.getElementById('PM25').textContent=data['data'][0]['pm25'].toFixed(1);
                document.getElementById('PM10').textContent=data['data'][0]['pm10'].toFixed(1);
                document.getElementById('O3').textContent=data['data'][0]['o3'].toFixed(1);
                document.getElementById('NO2').textContent=data['data'][0]['no2'].toFixed(1);
                document.getElementById('SO2').textContent=data['data'][0]['so2'].toFixed(1);
                document.getElementById('CO').textContent=data['data'][0]['co'].toFixed(1);
            })
            .catch(err => {
                document.getElementById('destination').textContent='Invalid ZIP Code'
                document.getElementById('AQI').textContent='';
                document.getElementById('condition').textContent='';
                document.getElementById('PM25').textContent='';
                document.getElementById('PM10').textContent='';
                document.getElementById('O3').textContent='';
                document.getElementById('NO2').textContent='';
                document.getElementById('SO2').textContent='';
                document.getElementById('CO').textContent='';
            })
        document.getElementById('search_box').value='';
    }
})