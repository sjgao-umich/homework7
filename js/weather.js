function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;

    // Your code here.
    location = document.getElementById("location").value;
    if (!location) {
    	location = "Ann Arbor";
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    format = "imperial";
    if (document.getElementById("celcius").checked) {
    	format = "metric";	
    }
    
    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    let key = "1a56ffec3d035169e84422c17f2297fd";
    query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=" + key;
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json);
        let weather = json["weather"][0];
        let url = "https://openweathermap.org/img/wn/" + weather["icon"] + ".png";
        let img = document.getElementById("tempImg");
        img.setAttribute("src", url);
        document.getElementById("forecast").style = "display: block";
        document.getElementById("loc").innerHTML = json["name"] + "," + json["sys"]["country"];
        document.getElementById("temp").innerHTML = json["main"]["temp"] + " with " + weather["description"];
        //console.log(query + json["weather"][0]["icon"]);
    });
}
