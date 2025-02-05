import React from 'react';
import './NewsItem.css'; 

const NewsItem = ({ title, description, image, url, publishedAt}) => {
  return (
    <div className="card my-4 mx-4 shadow animate__animated animate__fadeIn" style={{ width: '100%' }}>
      <img src={!image ? "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png" : image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
      
        <p className="card-text fw-normal">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-sm">
          Read more..
        </a>
        <p className="card-text"><small className="text-muted fw-light fst-italic">{publishedAt}</small></p>
      </div>
    </div>
  );
};

export default NewsItem;
