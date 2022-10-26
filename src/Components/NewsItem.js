import React from 'react'

const NewsItem = (items) =>  {
    
        const { title, desc, imageUrl, newsUrl, author } = items;
        return (
            <div className="card mb-4" style={{ maxWidth: "75rem", backgroundColor:"whitesmoke" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imageUrl} className="img-fluid rounded-start" alt="news-img" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-text">{desc}</p>
                              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning text-light"><strong>Read whole news &rarr;</strong></a>
                            <p className="card-text">
                              <strong className="text-dark">{!author?"Unknown":author}</strong>
                              &nbsp; 
                              <small className="text-muted">{new Date().toGMTString()}</small> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        )
}

export default NewsItem
