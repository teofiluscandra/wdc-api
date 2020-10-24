async function fetchData() {
    const result = await fetch("https://covid19.mathdro.id/api/countries/ID/")
    const covid_data = await result.json()
    if (result.status == 200) {
        document.querySelector("#confirmed").innerText = covid_data.confirmed.value.toLocaleString('id-ID')
        document.querySelector("#recovered").innerText = covid_data.recovered.value.toLocaleString('id-ID')
        document.querySelector("#deaths").innerText = covid_data.deaths.value.toLocaleString('id-ID')

        const last_update = new Date(covid_data.lastUpdate)
        document.querySelector("#last_update").innerText = last_update
    }
}

fetchData()