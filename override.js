(function() {
    const fs = require("fs")
    let data = JSON.parse(fs.readFileSync("./result.json"))
    /**
     * @param id the id of the review of the album that needs something changed
     * @param key what needs to be changed
     * @param value what it needs to be changed to
     */
    function set(id, key, value) { if(data[id] && data[id][key]) data[id][key] = value; }

    // this is for manually correcting things that are wack
    // this sets the score for polygondwanaland (by king gizzard) to 7/10 because a link screwed it up and i spent like 3 hours trying to fix it and failed
    set("JX54Kz7DaZQ", "rating", "7/10")
    /* the keys that you'd probably need are-
        artist
        album
        rating (score/10)

       of course there are a bunch of other ones, some of which i dont use but they're still there. check fetch.js for em all
    */

	// xvn1eG99Mfs	artist alt-J - album The Dream
	set("xvn1eG99Mfs", "artist", "alt-J")
	set("xvn1eG99Mfs", "album", "The Dream")
	// ka1Ko6n9FW0	artist alt-J - album Relaxer 
	set("ka1Ko6n9FW0", "artist", "alt-J")
	set("ka1Ko6n9FW0", "album", "Relaxer")
	// P0C3V8Acjcw	artist alt-J - album This Is All Yours
	set("P0C3V8Acjcw", "artist", "alt-J")
	set("P0C3V8Acjcw", "album", "This Is All Yours")
	// _TZBdHjgMxI	artist alt-J - album An Awesome Wave
	set("_TZBdHjgMxI", "artist", "alt-J")
	set("_TZBdHjgMxI", "album", "An Awesome Wave")

	// pccO0anCKZY	rating 5/10
	set("pccO0anCKZY", "rating", "5/10")

    set("D86O_TGb45Q", "rating", "what/10")
    set("CJDcbwpsjU0", "rating", "0.94721/10")
    set("8PqLOyHA7BI", "rating", "8/10")
    set("1_d3YFEGeCQ", "rating", "8/10")
    
    fs.writeFileSync("./result.json", JSON.stringify(data))
})();