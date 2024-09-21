import React from 'react'

const NewsItem = ({title , description , src , url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{width : "300px"  }}>
            <img src= {src ? src : '../public/logo192.png'} className="card-img-top" style={{height : "200px"  }} alt="..." />
            <div className="card-body" >
                <h5 className="card-title">{title.slice(0, 50)}...</h5>
                <p className="card-text">{description ? description : "Lorem adwdwiwdnwfwf wfweefwefw  w d wd wed w dw   edwe w wedwedw d wd wedw"}...</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
