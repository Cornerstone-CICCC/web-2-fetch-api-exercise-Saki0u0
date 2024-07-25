// YOUR JS CODE HERE
const latitude = 49.2827; 
const longitude = -123.1207;

async function getWeather() {
  try{
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m&current_weather=true&timezone=America/Vancouver`)
  const data = await res.json();

    console.log(data);

        const temperature = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;
        const timezone = 'America/Vancouver';

        const currentTime = new Date(data.current_weather.time); 
        const readableTime = currentTime.toLocaleString('en-US', { timeZone: timezone, timeZoneName: 'short' });

        document.getElementById('temperature').textContent = temperature;
        document.getElementById('wind-speed').textContent = windSpeed;
        document.getElementById('time').textContent = readableTime;
    }catch(error){
      console.error(error)
    }
  }

  document.addEventListener('DOMContentLoaded', getWeather);