const search= document.getElementById("search")

const textcity= document.getElementById("textcity");
const loca= document.getElementById("loca");
const cond= document.getElementById("cond");
const cur_temp=document.getElementById("cur_temp");
const min_max= document.getElementById("min_max");

const getInfo=async(event)=>{
    event.preventDefault();
    // alert("hi");
    let cityval= textcity.value;
      console.log(cityval);
      console.log(loca.innerText);
   if(cityval===""){
       loca.innerText="Please write city name";
   }
   else{
    try {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2a98812b71d7b641a445b670989b7f4d&units=metric`;
        const res= await fetch(url);
        const data= await res.json();
        console.log(data.name);

        loca.innerText=data.name;
        cond.innerText= data.weather[0].description;
        cur_temp.innerText= data.main.temp+ "°C";
        min_max.innerText= `Min temp: ${data.main.temp_min} °C | Max temp: ${data.main.temp_max} °C`

    } catch (error) {
        loca.innerText="Please write correct city name";
    }

   }
}

search.addEventListener('click',getInfo);

// const url= `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=2a98812b71d7b641a445b670989b7f4d`