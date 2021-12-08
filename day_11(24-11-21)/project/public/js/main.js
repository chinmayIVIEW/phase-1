const submit = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById("temp_real_val")
const datahide = document.querySelector('.middle_layer')


const getInfo = async (event)=>{
    event.preventDefault() 
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerText = "Please write the name before search"
        datahide.classList.add('data_hide')
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=783cda25cc3351045e0de80f0ef040d0`
            const res = await fetch(url)
            const data = await res.json()
            const arrData = [data]
            temp_real_val.innerText = arrData[0].main.temp
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`

            // condition for check the weather status
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }else if (tempMood == "Clouds"){
                temp_status.innerHTML =
                "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }else if (tempMood == "Rain"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML =
                "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>"
            }

            datahide.classList.remove('data_hide')

        } catch (error) {
            city_name.innerText = "Please enter the city name properly"
            datahide.classList.add('data_hide')
        }
    
        
    }
}
submit.addEventListener('click',getInfo)


// top layer date info

const getCurrentDay = ()=>{
    let weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thrusday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday"

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()]
    let Day = document.getElementById("day")

    Day.innerText = day
}
getCurrentDay();

const getCurrentTime = () => {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    let date = new Date()
    let month = months[date.getMonth()]
    let new_date = date.getDate()

    let today_data = document.getElementById("today_data")
    today_data.innerText = `${new_date} ${month}`
}
getCurrentTime()