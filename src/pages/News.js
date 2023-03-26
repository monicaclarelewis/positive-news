
import axios from "axios";
import { useEffect, useState } from 'react';




function News() {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);


  //Make api call to news api
  async function getNewsData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);

    //Make news api call using axios
    const resp = await axios.get("https://newsapi.org/v2/everything?q=news&apiKey=edc9094ac44144e3922d765f10dda632");
    setNewsData(resp.data.articles);

    //Set loading boolean to false so that we know to show news articles
    setLoading(false);
  }

  useEffect(() => {
    getNewsData();
  }, []);



  return (
    <div className="News">
      Positive-News
    
    {newsData.map((newsData, ) => {
    return (
      <newsData>
        title={newsData.title}
        description={newsData.description}
        url={newsData.url}
        urlToImage={newsData.urlToImage}
      </newsData>
    )
    
    
      
        
  })
}
    </div>
  );

}



export default News;