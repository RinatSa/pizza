import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../redux/filterSlice"

function Category() {

    const dispatch = useDispatch()
    const activeCategory = useSelector(state => state.filter.activeCategory)

    const category = [
        {id: 0, label: "All"},
        {id: 1, label: "Meat"},
        {id: 2, label: "Vegetarian"},
        {id: 3, label: "Grill"},
        {id: 4, label: "Hot"},
        {id: 5, label: "Calzone"},
    ]

    return (
        <div className="categories">
            <ul>
                {category.map(item => <li key={item.id} onClick={() => dispatch(setActiveCategory(item.id))}
                                          className={activeCategory === item.id ? "active" : ""}>{item.label}</li>)}
            </ul>
        </div>
    );
}

export default Category;