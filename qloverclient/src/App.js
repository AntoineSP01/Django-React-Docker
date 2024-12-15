import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./form";
import UpdatedForm from "./updatedForm";
import { Button, Box } from '@mui/material';


function App() {
  const [articles, setArticles] = useState([]); 
  const [error, setError] = useState(null); 
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 

  
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8888/api/article/");
          setArticles(response.data); 
        } catch (err) {
          console.error("Erreur lors de la récupération des données :", err);
          setError(err);
        }
      };

      fetchData(); 
    }); 

    const openModal = (articleId) => {
      const article = articles.find((a) => a.id === articleId);
      setSelectedArticle(article);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setSelectedArticle(null);
    };

    const deleteArticle = async (id) => {
      try {
        await axios.delete(`http://127.0.0.1:8888/api/articles/${id}/`);
        const data = articles.filter(article => article.id !== id);
        setArticles(data);
        console.log(`Article avec l'ID ${id} supprimé`);
      } catch (err) {
        console.error("Erreur lors de la suppression de l'article :", err);
      }
    };
  

    return (
      <Box>
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Liste des Articles</h1>
    
        {error && (
          <p className="text-red-500 text-center mb-4">Erreur : {error.message}</p>
        )}
    
        <ul className="space-y-4">
          {articles.map((article) => (
            <li
              key={article.id}
              className="p-4 shadow-md rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {article.topic}
              </h2>
              <p className="text-gray-700">
                <span className="font-medium text-gray-600">Auteur :</span>{" "}
                {article.author}
              </p>
              <p className="mt-2 text-gray-600">{article.body}</p>
              <Button onClick={() => openModal(article.id)}>
              Modifier
            </Button>
            <Button color="error" onClick={() => deleteArticle(article.id)}>
              Supprimer
            </Button>
            
            </li>
          ))}
        </ul>

        {modalOpen && selectedArticle && (
          <UpdatedForm
            article={selectedArticle}
            closeModal={closeModal}
          />
        )}
    
        <div className="mt-8">
          <Form />
        </div>
      </Box>
    );
    
  
}

export default App;
