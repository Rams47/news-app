import React from 'react'

const NewsItem = (props) => {
    return (
        <div className='bg-white rounded-lg leading-3'>
            <div className='flex flex-col items-center'>
                <img className='w-auto rounded-t-lg ' src={props.imgurl}/>
                <p className='text-xl font-bold mx-1.5 text-left my-3 font-sans'>{props.title}</p>
                <p className='text-base font-normal mx-1.5 text-left'>{props.description}</p> 
                <br/>
                <p className='text-xl font-semibold mt-2'>{props.author == null ? "Unknown" : props.author}</p>
                <br/>
                <a rel="noreferrer" href={props.newsUrl} target="_blank"><p className='text-lg'>Read More..</p ></a>
                <p className='text-xl font-medium mb-2'>{props.source}</p>
            </div>
        </div>
    )
}

export default NewsItem
