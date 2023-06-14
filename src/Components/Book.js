import React from "react";
//import { ReactDOM } from "react-dom";

const favbooks1 = [
    {
        title: "Shiva's Triology",
        src: "https://www.amazon.in/Shiva-Trilogy-English-Set-books/dp/B07RF1MGJ9"
    },
    {
        title: "Wings of fire",
        src: ""
    },
    {
        title: "To kill a mockingbord",
        src: ""
    },
    {
        title: "The Alchemist",
        src: ""
    },
    {
        title: "Bhagwad Geeta by Swami Vivekananda",
        src: ""
    }]

function Favourite() {
    // const b=favbooks[2];

    return (

        <div>
            <h1>My favourite Books</h1>
            <ol>

                {favbooks1.map(val => (
                    <li><a href={val.src}>{val.title} </a></li>
                ))}

            </ol>
        </div>)
}

export default Favourite;