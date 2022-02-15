const router = require("express").Router();
const Snippet = require("../models/snippetModel")


// Listens to get request on /test
router.get("/test", (req, res) => {
    res.send("Router test");
});


// Reads snippets
router.get("/", async (req, res) =>{
    try {
        // find returns an array
        const snippets = await Snippet.find();

        res.json(snippets);

    } catch (err) {
        res.status(500).send();
    }
});



router.delete("/:id", async (req, res) => {
    try {
        
        const snippetID = req.params.id;

        // Checks if id was given
        if(!snippetID)
        {
            return res.status(400).json({errorMessage: "Snippet ID not given. Please contact developer"});
        }


        // Checks if the desired ID is in the databse
        const existingSnippet = await Snippet.findById(snippetID);
        if(!existingSnippet)
        {
            return res.status(400).json({errorMessage: "ID is not in database"})
        }


        // deletes snippet
        await existingSnippet.delete();

        res.json(existingSnippet);

    } catch (err) {
        res.status(500).send();
    }
});


// Update Snippet
// TODO: test
router.put("/:id", async (req, res) =>
{
    try {
        
        const {title, description, code} = req.body;
        const snippetID = req.params.id;

        // Checks if id was given
        if(!snippetID)
        {
            return res.status(400).json({errorMessage: "Snippet ID not given. Please contact developer"});
        }

        // Checks if new information for snippet is valid
        if(!description && !code)
        {
            res.status(400).json({errorMessage: "you need to enter at least a description or code "});
            return;
        }


        // Checks if the desired ID is in the databse
        const originalSnippet = await Snippet.findById(snippetID);
        if(!originalSnippet)
        {
            return res.status(400).json({errorMessage: "ID is not in database"})
        }

        
        originalSnippet.title = title;
        originalSnippet.description = description;
        originalSnippet.code = code;

        const savedSnippet = await originalSnippet.save(); // NOTE: using saved on a snippet that already exist will update it

        res.json(savedSnippet);

    } catch (err) {
        console.log("Other error")
        console.log(req.body)
        res.status(500).send();
    }
})


// listen to post request on "/test" creates snippet
router.post("/", async (req, res) => {

    try{

        // Destructing syntax for getting data from body shown below
        //const {attribute1, attribute2,.... attributen} = req.body;
        
        const {title, description, code} = req.body; 

        const body = req.body;
        console.log(body);

        // POST data validation
        if(!description && !code)
        {
            res.status(400).json({errorMessage: "you need to enter at least a description or code "});
            return;
        }


        // created new document to be send to the database
        const newSnippet = new Snippet({
            title, description, code
        });


        // Stores our new document in the database
        const savedSnippet = await newSnippet.save();


        res.json(savedSnippet);

    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;