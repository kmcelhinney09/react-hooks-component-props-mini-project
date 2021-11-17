import React from "react";

function readTime(minutes){
    if(minutes<30){
        const readTime = Math.ceil((minutes/5)*5)
        let coffee = [];
        for(let i=0;i<readTime/5;i++){
            coffee.push("☕")
        }
        return(
            ` ${coffee.join("")} ${minutes} min read`
        )
    } else{
        const readTime = Math.ceil((minutes/10)*10)
        let box = [];
        for(let i=0;i<readTime/10;i++){
            box.push("🍱")
        }
        return(
            ` ${box.join("")} ${minutes} min read`
        )
    }
}
function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {readTime(minutes)}</small>
            <p>{preview}</p>
        </article>)
}

export default Article