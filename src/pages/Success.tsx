import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";
import "./Success.css";

const Success: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedFlight, name, age, healthIssue, healthDetails } = location.state || {};
  const [flightDetails, setFlightDetails] = useState<any>(null);

  useEffect(() => {
    if (selectedFlight) {
      axios.get(`https://api.spacexdata.com/v4/launches/${selectedFlight}`).then((response) => {
        setFlightDetails(response.data);
      });
    }
  }, [selectedFlight]);

  if (!flightDetails) {
    return <Container className="text-center mt-5">Carregando detalhes do voo...</Container>;
  }

  return (
    <div className="success-background">
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
             Compra Confirmada!
          </h1>

          <h2 className="h5">Detalhes do Voo</h2>
          <p><strong>Nome do Voo:</strong> {flightDetails.name}</p>
          {flightDetails.links.patch.small && (
            <img src={flightDetails.links.patch.small} alt="Insígnia do voo" className="img-fluid mb-3" />
          )}

          <h2 className="h5">Passageiro</h2>
          <p><strong>Nome:</strong> {name}</p>
          <p><strong>Idade:</strong> {age}</p>
          <p><strong>Problemas de Saúde:</strong> {healthIssue}</p>

          {/* Novo campo: Descrição do problema de saúde */}
          {healthIssue === "Sim" && (
            <p><strong>Descrição do problema de saúde:</strong> {healthDetails}</p>
          )}

          <Button variant="primary" className="w-100 mt-3 futuristic-button" onClick={() => navigate("/")}>
            🔙 Voltar ao Início
          </Button>

        </Card>
      </Container>
    </div>
  );
};

export default Success;