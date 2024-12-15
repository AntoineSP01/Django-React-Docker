import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from '@mui/material';


function UpdateArticleModal({ article, closeModal }) {
  const [formData, setFormData] = useState({
    topic: article.topic,
    author: article.author,
    body: article.body,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/article/${article.id}/`,
        formData
      );
      console.log("Article mis à jour :", response.data);
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article :", error);
    }
  };

  return (
    <Box className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Modifier l'article</h2>

        <form onSubmit={handleSubmit}>
          <label className="mb-2">
            <span className="font-bold">Topic:</span>
            <TextField
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>

          <label className="mb-2">
            <span className="font-bold">Author:</span>
            <TextField
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </label>

          <label className="mb-2">
            <span className="font-bold">Body:</span>
            <TextField
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              multiline
              rows={4}
            />
          </label>

          <Button type="submit">
            Mettre à jour
          </Button>
        </form>

        <Button color="error" onClick={closeModal} >
          Fermer
        </Button>
      </div>
    </Box>
  );
}

export default UpdateArticleModal;
