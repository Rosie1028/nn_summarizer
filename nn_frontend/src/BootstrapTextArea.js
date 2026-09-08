import React, { useState } from 'react';
import { Form, Button, Alert, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

const BootstrapTextarea = () => {
  const [article, setArticle] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const handleSummarize = async () => {
    if (!article.trim()) {
      setError('Por favor, ingresa una noticia para resumir');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/',
        headers: {
          "Content-type": "application/json"
        },
        data: {
          text: article.trim()
        }
      });
      
      if (response.data && response.data.summary) {
        setResult(response.data.summary);
      } else {
        setResult(response.data);
      }
    } catch (err) {
      console.error('Error details:', err.response?.data || err.message);
      setError('Error al procesar la noticia. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setArticle('');
    setResult('');
    setError(null);
    setCharCount(0);
  };

  const handleArticleChange = (event) => {
    const value = event.target.value;
    setArticle(value);
    setCharCount(value.length);
    setResult('');
    setError(null);
  };

  return (
    <div className="textarea-container">
      <Form.Group className="mb-4">
        <Form.Control
          as="textarea"
          rows={12}
          value={article}
          onChange={handleArticleChange}
          spellCheck="false"
          placeholder="Empieza escribiendo o pega tu noticia aquí..."
          className="custom-textarea"
        />
        <div className="d-flex justify-content-between align-items-center mt-2">
          <small className="text-muted">
            {charCount} caracteres
          </small>
          <small className="text-muted">
            {Math.ceil(charCount / 5)} palabras aproximadas
          </small>
        </div>
      </Form.Group>

      <div className="d-flex gap-2 mb-4">
        <Button
          variant="primary"
          onClick={handleSummarize}
          disabled={isLoading || !article.trim()}
          className="action-button"
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Procesando...
            </>
          ) : (
            <>
              <i className="fas fa-magic me-2"></i>
              Resumir
            </>
          )}
        </Button>
        
        <Button
          variant="outline-secondary"
          onClick={handleClear}
          disabled={!article && !result}
          className="action-button"
        >
          <i className="fas fa-trash-alt me-2"></i>
          Eliminar todo
        </Button>
      </div>

      {error && (
        <Alert variant="danger" className="mt-3 custom-alert">
          <i className="fas fa-exclamation-circle me-2"></i>
          {error}
        </Alert>
      )}

      {result && (
        <Card className="result-card mt-4">
          <Card.Header className="result-header">
            <i className="fas fa-check-circle me-2"></i>
            Resumen generado
          </Card.Header>
          <Card.Body>
            <p className="result-text">{result}</p>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default BootstrapTextarea;