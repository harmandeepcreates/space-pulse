const apiKey = "Fu29biLdVIWCA2gedYy10sLfhUWmqfcd3Dv10JHi";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=true`)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        document.getElementById("apod-title").textContent = data.title;
        document.getElementById("apod-description").textContent = data.explanation;

        if (data.media_type === "image") {
            document.getElementById("apod-image").src = data.url;
        }

        else if (data.media_type === "video") {
            document.getElementById("apod-image").src =
                data.thumbnail_url || "";
        }
    })
    .catch(error => {
    console.error(error);

    document.getElementById("apod-title").textContent =
        "Unable to load APOD";

    document.getElementById("apod-description").textContent =
        "Something went wrong while fetching NASA data.";
});
