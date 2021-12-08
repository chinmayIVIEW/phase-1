const curDate = document.getElementById("date")
let weathercon = document.getElementById("weathercon")

const tempStatus = "{%tempstatus%}"

if (tempStatus == "Sunny") {
    weathercon.innerHTML ="<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
    weathercon.innerHTML ="<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
    weathercon.innerHTML ="<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathercon.innerHTML ="<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}


const getCurrentDay = () => {
    var weekday = new Array(7)
    weekday[0] = "sun"
    weekday[1] = "mon"
    weekday[2] = "tue"
    weekday[3] = "wed"
    weekday[4] = "thrus"
    weekday[5] = "fri"
    weekday[6] = "sat"

    let currenttime = new Date()
    let day = weekday[currenttime.getDay()]
    return day
}
const getCurrentTime = () => {
    var months = [
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
    var date = new Date()
    var month = months[date.getMonth()]
    var date = date.getDate()

    let houres = date.getHours()
    let mins = date.getMinutes()

    if (houres > 11) {
        period = "PM"
    } else {
        period = "AM"
    }
    if (mins < 10) {
        mins = "0" + mins
    }
    return `${month} ${date} | ${houres}:${mins}${period}`
}
curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime()
