const counters = document.querySelectorAll(".counter")

counters.forEach((counter)=>{
    counter.innerHTML = 0

    const unpdateCounter = () =>{
        const targetCount = Number(counter.getAttribute('data-target'))

        const startingCount = Number(counter.innerHTML)

        const incr = targetCount / 100

        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`
            setTimeout(unpdateCounter,10);
        }else{
            counter.innerHTML = targetCount
        }
    }
    unpdateCounter()
})