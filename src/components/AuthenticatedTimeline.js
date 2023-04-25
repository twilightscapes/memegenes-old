import React, { useState, useEffect } from "react";
import useSiteMetadata from "../hooks/SiteMetadata";
import Layout from "../components/siteLayout";
import { Helmet } from "react-helmet";
import TimeAgo from "react-timeago";
import userRssData from "../util/userRss.json";


const AuthenticatedTimeline = () => {
    const { showNav } = useSiteMetadata();
    const { showDates } = useSiteMetadata();
    const { postcount } = useSiteMetadata();
    const [feed, setFeed] = useState([]);
    const [visibleItems, setVisibleItems] = useState(postcount);
    const [favorites, setFavorites] = useState([]);
  
    const combinedFeed = [
      ...favorites,
      ...feed.filter((item) => !favorites.some((fav) => fav.link === item.link)),
    ];

    useEffect(() => {
        const fetchRssFeed = async (rssFeed) => {
          const response = await fetch(rssFeed.rssFeedUrl);
          const text = await response.text();
          const xml = new DOMParser().parseFromString(text, "text/xml");
          const items = xml.querySelectorAll("item");
      
          return Array.from(items).map((item) => {
            const mediaContent = item.getElementsByTagName("media:content")[0];
            const imageUrl = mediaContent ? mediaContent.getAttribute("url") : null;
      
            return {
              name: rssFeed.name,
              title: item.querySelector("title")?.textContent || "",
              link: item.querySelector("link")?.textContent || "",
              description: item.querySelector("description")?.textContent || "",
              pubDate: item.querySelector("pubDate")?.textContent || "",
              imageUrl: imageUrl,
              favorite: false // Add the favorite field and set it to false by default
            };
          });
        };
      
        const fetchAllFeeds = async () => {
          if (typeof window !== "undefined") {
            const feedPromises = userRssData.rssFeeds.map((feed) => fetchRssFeed(feed));
            const allFeeds = await Promise.all(feedPromises);
            const mergedFeed = [].concat(...allFeeds);
      
            // Sort the merged feeds by their pubDate in descending order (most recent first)
            const sortedFeed = mergedFeed.sort((a, b) => {
              return new Date(b.pubDate) - new Date(a.pubDate);
            });
      
            setFeed(sortedFeed);
          }
        };
      
        fetchAllFeeds();
      }, []);
      



  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);



  const toggleFavorite = (item) => {
    const newFavorites = [...favorites];
  
    if (favorites.some((favorite) => favorite.link === item.link)) {
      // If the item is already in favorites, remove it
      const index = newFavorites.findIndex((favorite) => favorite.link === item.link);
      newFavorites.splice(index, 1);
      item.favorite = false;
    } else {
      // Otherwise, add the item to favorites
      newFavorites.push(item);
      item.favorite = true;
    }
  
    setFavorites(newFavorites);
  
    // Save the new favorites to localStorage
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  
    // Update the favorite status of the item in the feed
    const newFeed = feed.map((feedItem) => {
      if (feedItem.link === item.link) {
        return { ...feedItem, favorite: item.favorite };
      }
      return feedItem;
    });
  
    setFeed(newFeed);
  };
  
  
  // const fullName = user && user.user_metadata ? user.user_metadata.full_name : 'Unknown';


    const showMoreItems = () => {
      setVisibleItems(visibleItems + postcount);
    };

  return (

      <Layout>
        <Helmet>
          <body id="body" className="test" />
        </Helmet>

        {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}
<h1 style={{ position: 'relative', zIndex: '1', margin: '0 auto', textAlign:'center' }}>My Timeline:</h1>
<div className="contentpanel grid-container" style={{ marginTop: "1rem" }}>
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>



          {combinedFeed.slice(0, visibleItems).map((item, index) => (
          

          <div className="post-card1" style={{ justifyContent: "center", alignItems: "center", position:'relative' }} key={index}>




  <a className="postlink" href={item.link} rel="noopener noreferrer">
    {item.imageUrl && (
      <img className="featured-image1" src={item.imageUrl} alt={item.title} style={{ position: 'relative', zIndex: '1', maxHeight: '', margin: '0 auto' }} />
    )}

    <div className="post-content" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', height:'', position:'relative', background:'', padding:'0', margin:'0 auto 0 auto', textAlign:'center', overFlow:'hidden'}}>
      
      <div className="panel" style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', margin:'10px auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'center', padding:'1vh 2vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'', color:'#aaa' }}>
      {/* <h2 onClick={() => toggleFavorite(item)}>
  {item.favorite ? "⭐" : "☆"} {item.name} - {item.title}
</h2> */}


{!item.favorite && (
  <button
    className="star-button"
    onClick={(event) => {
      event.preventDefault();
      toggleFavorite(item);
    }}
    style={{ cursor: "pointer", background: "none", border: "none", position:'absolute', bottom:'10px', right:'10px', zIndex:'2' }}
  >
    ☆
  </button>
)}
{item.favorite && (
  <button
    className="star-button"
    onClick={(event) => {
      event.preventDefault();
      toggleFavorite(item);
    }}
    style={{ cursor: "pointer", background: "none", border: "none", position:'absolute', bottom:'10px', right:'10px', zIndex:'2' }}
  >
    ⭐
  </button>
)}







<h2 style={{textAlign:'left', textWrap:'balance'}}>
  {item.name} - {item.title}
</h2>
        <p style={{textAlign:'left', textWrap:'balance', fontSize:'85%'}}>{item.description}</p>
      </div>

      {showDates ? (
        <p style={{position:'', textAlign:'center', border:'0px solid red', fontSize:'70%', minWidth:'100px'}}>
          <TimeAgo date={item.pubDate} />
        </p>
      ) : (
        ""
      )}
    </div>
  </a>
</div>

          

          
        ))}



{visibleItems < feed.length && (
            
              <button className="post-card1" style={{ justifyContent: "center", alignItems: "center" }} onClick={showMoreItems} >
                Show more
              </button>
            
          )}
{visibleItems === feed.length && (
  <div style={{ textAlign: 'center', margin: '1rem 0' }}>End of Results Reached</div>
)}
        
      </div>
      </Layout>

  );
};





export default AuthenticatedTimeline;
