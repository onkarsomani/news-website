import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    // const [api, setApi] = useState('');

    useEffect(() => {
        const apiKey = '432eda5f3980400b98e420c9c2da35ba'; // Use process.env to access the API key
        console.log(apiKey);
        // setApi(apiKey);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching news:', error));
    }, [category]);


    return (
        <div>
            {/* <p>hi there {api}</p> */}
            <h2 className="py-2 text-center">
                Latest <span className="badge bg-danger"> News </span>
            </h2>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))
            ) : (
                <p>No news available at the moment.</p>
            )}
        </div>
    );
};

export default NewsBoard;
