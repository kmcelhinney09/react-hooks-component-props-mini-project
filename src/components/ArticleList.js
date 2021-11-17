import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
    const listOfArticles = posts.map(post => <Article key={post.id} title={post.title} preview={post.preview} date={post.date} minutes={post.minutes}/>)
    console.log(listOfArticles)
    return (
        <main>
            {listOfArticles}
        </main>)
}

export default ArticleList