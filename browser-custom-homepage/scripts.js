fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By ${data.user.name}`
}) 
.catch(err => {
    document.body.style.backgroundImage = `url(https://unsplash.com/photos/a-red-train-traveling-down
    -train-tracks-next-to-a-bridge-WjlEGn55jTs)`
    document.getElementById("author").textContent = `By: Adam Borkowski`
})

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
.then(res => {
    if(!res.ok){
        throw error("Something Went Wrong.")
    }
    return res.json()
})
.then(data => {
    document.getElementById("crypto").innerHTML =`
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `

    document.getElementById("crypto").innerHTML += `
        <p>💰: $${data.market_data.current_price.usd}</p>
        <p>☝: $${data.market_data.high_24h.usd}
        <p>👇: $${data.market_data.low_24h.usd}</p>
    `
})
.catch(error => console.log(error))

function getCurrentTime(){
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timestyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap/data/3.0/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => {
        if(!res.ok) {
            throw Error("Weather data not available.")
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const iconUrl =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p>${Math.round(data.main.temp)}</p>
            <p>${data.name}</p>
        `
    })
    .catch(err => {console.log(err)});
})