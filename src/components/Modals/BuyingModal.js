import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BuyingModal = (props) => (
  <Modal centered size="lg" show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        Comprando informações de: <em>Artista #{props.artistId}</em>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        <strong>
          Aqui, as gravadoras poderão adquirir as informações de contato dos
          artistas.
        </strong>
      </p>
      <p>
        Mas por enquanto o módulo "Compra de Informações" ainda não está
        implementado.
      </p>
      <p>
        Para testes, definimos os Artistas <strong>ID#718013</strong> e{" "}
        <strong>ID#192309</strong> como comprados. Experimente clicar no botão
        da lupa azul.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Voltar</Button>
      <Button variant="success" disabled>
        Comprar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default BuyingModal;
