import React from 'react';

function Search({term, setTerm}) {

    return (
        <div>
            <input type="search" value={term} onChange={(e) => setTerm(e.target.value)}
                   style={{borderRadius: 25, height: 50,width:180,fontSize:18,padding:5}}/>
        </div>
    );
}

export default Search;