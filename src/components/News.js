import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pages, setpages] = useState(1);
    const [totalResult, settotalResult] = useState(0)

    const updateNews = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages+1}&pageSize=3`;
        setLoading(true);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedData = await data.json();
        props.setprogress(70);
        console.log(parsedData.totalResults)
        setarticles(parsedData.articles)
        settotalResult(parsedData.totalResults)
        setLoading(false)
        props.setprogress(100);
    }

    useEffect(() => {
        updateNews();
         // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages+1}&pageSize=3`;
        setpages(pages+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResult(parsedData.totalResults)
      };
    return (
        <div>
            <h1 className='text-3xl font-bold ml-10 my-6'>{props.category} Headline</h1>
            {loading && <h1>Loading...</h1>}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length != totalResult}
            loader={<h1>Loading...</h1>}
            
            >
            <div className='grid grid-cols-3 gap-8 m-8'>
                {articles.map((article) => {
                    return (
                        <NewsItem key={article.url} source={article.source.name} imgurl={article.urlToImage} title={article.title} description={article.description} author={article.author} newsUrl={article.url} />
                    )
                })}
            </div>
            </InfiniteScroll>

        </div>
    )
}

export default News
