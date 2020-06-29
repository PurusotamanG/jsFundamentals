function batman() {
    // get's stored to Closure dict
    var mostFav = "Christian Bale"

    //get's destroyed
    var leastFav = "Michael Keaton"

    function printMostFavBatman() { 
        // Closure dict is only available when this method is called
        // Can we not view closure beforehand ??
        console.log(`Most favorite batman is ${mostFav}`)
    }

    // Returning a pointer to function rather than calling it
    return printMostFavBatman
}

var favBats = batman()
favBats()