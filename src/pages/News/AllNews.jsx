import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ApiUrl } from '../../components/API/Api';
import { Link, useLocation } from 'react-router-dom';
import './AllNews.css';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const NewsDetails = styled.div`
  padding: 20px;
`;

const NewsTitle = styled.h2`
  font-size: 23px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const NewsCategory = styled.p`
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
`;

const NewsContent = styled.div`
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 0.5px;
  word-spacing: 0.5px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 300px;
  &:hover {
    overflow-y: overlay;
    &::-webkit-scrollbar {
      display: block;
    }
  }
  &::-webkit-scrollbar {
    width: 5px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const AllNews = () => {
  const search = useLocation().search;
  const encryptedId = new URLSearchParams(search).get("allnewsid");
  const allnewsid = parseInt(atob(decodeURIComponent(encryptedId)));

  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/resource/category/1`);
        const newsData = response.data.data || [];
        const selected = newsData.find(item => item.id === allnewsid);
        setSelectedNews(selected || null);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };
    fetchNewsData();
  }, [allnewsid]);

  return (
    <Container className="latest-news-container mt-3">
      {selectedNews && (
        <div className="container">
          <h3 className="text-center">Latest News</h3>
          <div className="row">
            <div className="col-md-12">
              <NewsDetails>
                <img src={selectedNews.media_url || "images/all-img/noimage.jpg"} alt={selectedNews.title} className="news-image" />
                <br />
                <NewsTitle><i className="fa fa-newspaper-o"></i> {selectedNews.title}</NewsTitle>
                <NewsCategory><i className="fa fa-tag"></i> {selectedNews.category_name}</NewsCategory>
                <NewsCategory><i className="fa fa-calendar"></i> {selectedNews.eventdate}</NewsCategory>
                <NewsContent dangerouslySetInnerHTML={{ __html: selectedNews.content }}></NewsContent>
                <Link to={'/'} className="btn btn-success btn-sm mt-3 mb-3 text-white" style={{ float: "right" }}><i className="fa fa-home"></i> Go Home</Link>
              </NewsDetails>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default AllNews;