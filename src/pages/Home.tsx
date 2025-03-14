import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import "./Home.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";


const Home: React.FC = () => {
  const [flights, setFlights] = useState<{ id: string; name: string }[]>([]);
  const [selectedFlight, setSelectedFlight] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [healthIssue, setHealthIssue] = useState("Não");
  const [healthDetails, setHealthDetails] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launches/upcoming").then((response) => {
      setFlights(response.data.map((flight: any) => ({ id: flight.id, name: flight.name })));
    });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]{0,100}$/.test(value)) {
      setName(value);
    }
  };
  
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && Number(value) >= 0) {
      setAge(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(age) < 18) {
      setError("Você deve ter pelo menos 18 anos para reservar uma passagem.");
      return;
    }

    setError("");
    navigate("/success", {
      state: { selectedFlight, name, age, healthIssue, healthDetails },
    });
  };

  return (
    <div className="home-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100 p-3">
        <Card className="p-3 p-md-4 shadow-lg bg-dark text-white w-100" style={{ maxWidth: "600px" }}>
          <div className="text-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1920px-SpaceX-Logo.svg.png"
              alt="SpaceX Logo"
              className="spacex-logo"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <h1 className="text-center mb-4 display-4 futuristic-title">
             Reserva de Passagem Espacial
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Selecione um voo:</Form.Label>
              <Form.Select
                value={selectedFlight}
                onChange={(e) => setSelectedFlight(e.target.value)}
                required
                className="custom-select"
              >
                <option value="">Selecione um voo</option>
                {flights.map((flight) => (
                  <option key={flight.id} value={flight.id}>{flight.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nome Completo:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                maxLength={100}
                placeholder="Digite seu nome completo"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Idade:</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={handleAgeChange}
                required
                min="18"
                max="99"
                onWheel={(e) => e.currentTarget.blur()}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                    e.preventDefault();
                  }
                }}
                placeholder="Digite sua idade"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Possui algum problema de saúde?</Form.Label>
              <ButtonGroup className="w-100 futuristic-toggle-group">
                <ToggleButton
                  id="health-yes" // Adicionando um ID único
                  type="radio"
                  variant={healthIssue === "Sim" ? "success" : "outline-light"}
                  className="futuristic-toggle"
                  name="healthIssue"
                  value="Sim"
                  checked={healthIssue === "Sim"}
                  onChange={() => setHealthIssue("Sim")}
                >
                  ✅ Sim
                </ToggleButton>
                <ToggleButton
                  id="health-no" // Adicionando um ID único
                  type="radio"
                  variant={healthIssue === "Não" ? "danger" : "outline-light"}
                  className="futuristic-toggle"
                  name="healthIssue"
                  value="Não"
                  checked={healthIssue === "Não"}
                  onChange={() => {
                    setHealthIssue("Não");
                    setHealthDetails("");
                  }}
                >
                  ❌ Não
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>

            {healthIssue === "Sim" && (
              <Form.Group className="mb-3">
                <Form.Label>Descreva o problema de saúde:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={healthDetails}               
                  onChange={(e) => setHealthDetails(e.target.value)}
                  placeholder="Descreva seu problema de saúde"
                  required
                />
              </Form.Group>
            )}

            <Button variant="primary" type="submit" className="w-100 mt-3 futuristic-button">
              🚀 Comprar Ticket
            </Button>

          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
