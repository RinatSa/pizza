import React, {useTransition} from 'react';
import {setTerm} from "../redux/filterSlice"
import {useAppDispatch, useAppSelector} from "../hooks";

function Search() {

    const dispatch = useAppDispatch()
    const term = useAppSelector(state => state.filter.term)
    const [, startTransition] = useTransition()

    const changeTerm = (e:React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            dispatch(setTerm(e.target.value))
        })
    }

    return (
        <div>
            <input type="search" value={term} onChange={(e)=>changeTerm(e)}
                   style={{borderRadius: 25, height: 50, width: 180, fontSize: 18, padding: 5}}/>
        </div>
    );
}

export default Search;