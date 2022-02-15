import React, { useEffect, useState } from "react";
import Axios from "axios"
import Snippet from "./Snippet";
import SnippetEditor from "./SnippetEditor";

function Home() {

    
    const [snippets, setSnippets] = useState([]);
    const  [sippetEditorOpen, setSnippetEditorOpen] = useState(false);
    const [editSnippetData, setEditSnippetData] = useState(null);


    useEffect(() => {
        // Get Snippets
        getSnippets();
    }, []);

    // Function that makes the GET request to the API to get the snippets from the database
    async function getSnippets() {
        const snippetsResponse = await Axios.get("http://localhost:5000/snippet/");

        setSnippets(snippetsResponse.data);
    }

    function editSnippet (snippetData)
    {
        setEditSnippetData(snippetData);
        setSnippetEditorOpen(true);
    }

    function renderSnippets() {

        // Copies snippets useState array to a vanilla js array
        let sortedSnippets = [...snippets];

        // Sorts the snippets array using a custom compare function
        sortedSnippets = sortedSnippets.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })

        return sortedSnippets.map((snippet, i) => {
            //console.log(snippet);
            return <Snippet key={i} snippet={snippet} getSnippets={getSnippets} editSnippet = {editSnippet}/>
        });
    }
    

    return (
        <div className="home">
            
            {!sippetEditorOpen && <button onClick={() => {setSnippetEditorOpen(true)}}>Add Snippet</button>}
            {sippetEditorOpen && <SnippetEditor setSnippetEditorOpen={setSnippetEditorOpen} getSnippets={getSnippets} editSnippetData = {editSnippetData} />}

            {renderSnippets()}
        </div>
    )
}


export default Home;