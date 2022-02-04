getInfo("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json");

async function getInfo(url) {
    let tripData = await fetch(url);
    let jsonData = await tripData.json();
    let file = jsonData.result.results[0].file.split(".jpg",1);
    console.log(`${file[0]}.jpg`);
}