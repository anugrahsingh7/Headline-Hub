import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ ApiUrl }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  
  const removeDuplicates = (articles) => {
    const uniqueArticles = articles.reduce((acc, current) => {
      const x = acc.find(item => item.url === current.url);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []);
    return uniqueArticles;
  };

  const fetchNews = async (page = 1) => {
    setLoading(true);
    const pageSize = 10;  
    const url = `${ApiUrl}&page=${page}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);

      if (data.articles && Array.isArray(data.articles)) {
        const newArticles = removeDuplicates([...articles, ...data.articles]);
        setArticles(newArticles);
        setTotalResults(data.totalResults);
      } else {
        console.error('No articles found or response is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    setArticles([]);
    setPage(1);
    fetchNews(1);
  }, [ApiUrl]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    fetchNews(nextPage);
    setPage(nextPage);
  };

  return (
    <div className="container my-3">
      {loading && page === 1 ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<h4>Loading more articles...</h4>}
        >
          <div className="row">
            {articles.length === 0 ? (
              <h4 className="text-center">No articles found.</h4>
            ) : (
              articles.map((element) => (
                <div className="col-md-4 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title || 'No title'}
                    
                    description={element.description || 'No description'}
                    image={element.image}
                    url={element.url}
                    publishedAt={new Date(element.publishedAt).toLocaleString()}
                  />
                </div>
              ))
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
