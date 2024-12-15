import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from '@mui/material';

function Form() {
    const [formData, setFormData] = useState({
      topic: "",
      author:"",
      body: "",
    })

    const handleChange = (e) => {

      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
      
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
      const response = await axios.post("http://127.0.0.1:8888/api/articles/", formData);
      console.log("Form data submitted successfully:", response.data);
        setFormData({ topic: "", author: "", body: "" });
      } catch (error) {
      console.error("Error submitting form data:", error);
      }
    };

    return (
        <Box>
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Ajouter un article
          </h2>
      
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-lg mx-auto"
          >
            <div className="mb-4">
              <TextField
                type="text"
                label="Topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>
      
            <div className="mb-4">
              <TextField
                label="Author"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
      
            <div className="mb-4">
              <TextField
                label="Body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                fullWidth
                multiline
                rows={6}  
                />
            </div>
      
            <div className="text-center">
            <Button type="submit" color="success">
                Submit
            </Button>
            </div>
          </form>
        </Box>
    );
}

export default Form;