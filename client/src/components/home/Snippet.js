import axios from "axios";
import React from "react";



function Snippet({snippet, getSnippets, editSnippet}) {

    async function deleteSnippet()
    {
        await axios.delete(`http://localhost:5000/snippet/${snippet._id}`)
        getSnippets();
    }


    return (
        <div className="Snippet">
                {snippet.title && <h2>{snippet.title}</h2>}
                {snippet.description && <p>{snippet.description}</p>}
                {snippet.code && <pre><code>{snippet.code}</code></pre>}

            <button onClick={() => editSnippet(snippet)}>Edit</button>
            <button onClick={deleteSnippet}>Delete</button>
        </div>
    )
}

export default Snippet;