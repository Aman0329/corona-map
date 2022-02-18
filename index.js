
function update() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data) //here rsp is object
            rsp.data.forEach(element => {
                longitude = element.longitude;
                latitude = element.latitude;
                cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255,0,0)"
                }
                else {
                    color = `rgb(${cases},0,0)`
                }

                // Create a new marker.
                new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])
                    .addTo(map);
                // Set marker options.
                new mapboxgl.Marker({
                    color: color,
                    draggable: false
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        

})
}
update();