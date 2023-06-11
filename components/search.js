import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTerm} from "../redux/filterSlice"

function Search() {

    const dispatch = useDispatch()
    const term = useSelector(state => state.filter.term)

    return (
        <div>
            <input type="search" value={term} onChange={(e) => dispatch(setTerm(e.target.value))}
                   style={{borderRadius: 25, height: 50, width: 180, fontSize: 18, padding: 5}}/>
        </div>
    );
}

export default Search;