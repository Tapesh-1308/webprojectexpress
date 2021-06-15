const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const tempRealVal = document.getElementById('tempRealVal');
const tempStatus = document.getElementById('tempStatus');

const dataHide = document.querySelector('.middleLayer');





const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Write a City Name Above 👆`;
        dataHide.classList.add('dataHide')
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=80af81d17193da7362954ec2cdd7d32c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempRealVal.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather.main;
            //condition to check sunny or cloud
            if (tempMood === "Clear") {
                tempStatus.innerHTML =
                    '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            else if (tempMood === "Clouds") {
                tempStatus.innerHTML =
                    '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
            }
            else if (tempMood === "Rain") {
                tempStatus.innerHTML =
                    '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
            }
            else {
                tempStatus.innerHTML =
                    '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            dataHide.classList.remove('dataHide')


        }
        catch {
            city_name.innerText = 'Enter a Valid City Name 👍';
            dataHide.classList.add('dataHide')
        }
    }
}
submitBtn.addEventListener('click', getInfo)