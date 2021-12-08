{/* <span id="temp" class="fa"></span> */}

const tempLoad = ()=>{
    let temp = document.getElementById('temp')
    temp.innerHTML = "&#xf2cb"

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca"
        temp.style.color = "#f8b627"
        setTimeout(() => {
            temp.innerHTML = "&#xf2c9"
            setTimeout(() => {
                temp.innerHTML = "&#xf2c8"
                setTimeout(() => {
                    temp.innerHTML = "&#xf2c7"
                    temp.style.color = "#d63031"
                }, 4000);
            }, 3000);
        }, 2000);
    },1000);
}
tempLoad()
setInterval(tempLoad, 5000);