import React from 'react';
import {setActiveCategory} from "../redux/filterSlice"
import {useAppDispatch, useAppSelector} from "../hooks";

function Category() {

    const dispatch = useAppDispatch()
    const activeCategory = useAppSelector(state => state.filter.activeCategory)

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