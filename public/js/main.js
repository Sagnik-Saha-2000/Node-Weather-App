const submitBtn= document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText=`Plz write name before you search`;
    }
    else{
        try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=eb175915237f99d65a5ae4f8971b973b`;
    const response= await fetch(url);
    const data=await response.json();
    
    const arrData= [data];
    //console.log(arrData[0].weather[0].main);
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp_real_val.innerText=arrData[0].main.temp;
    
      
    const tempMood=arrData[0].weather[0].main;

    if(tempMood == "Clear"){
        temp_status.innerHTML=
        "<i class='fas fa-sun' style='color: yellow;'></i>";
    }
    if(tempMood == "Clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color: skyblue;'> </i>";
    }
    if(tempMood == "Rain"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud-rain' style='color: black;'> </i>";
    }else{
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color: white;'> </i>";
    }

        }catch{
            city_name.innerText=`Plz enter the city name properly`;
        }

    
}
}
submitBtn.addEventListener('click',getInfo);