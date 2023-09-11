import { useState, useEffect } from "react";

type Articles = {
    source: {
        id: string;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
const Economics = () => {
    const [articles, setArticles] = useState<Articles[]>([]);
    const url="https://newsapi.org/v2/everything?q=argetina+economics&apiKey=a3aeae7b68034752a63e1703ded74468"


    useEffect(() => {
        // Realiza la llamada a la API de NewsAPI
        fetch(`${url}`)
          .then((response) => response.json())
          .then((data) => setArticles(data.articles))
          .catch((error) => console.error('Error al obtener noticias:', error));
      }, []);

  


    return (
        <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Últimas Noticias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              <p className="text-sm text-gray-400 mt-2">{article.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}
export default Economics;