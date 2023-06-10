import React, {useState} from 'react';

function Category(props) {

    const [activeCategory, setActiveCategory] = useState()

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
                {category.map(item => <li key={item.id} onClick={() => setActiveCategory(item.id)}
                                          className={activeCategory === item.id ? "active" : ""}>{item.label}</li>)}
            </ul>
        </div>
    );
}

export default Category;