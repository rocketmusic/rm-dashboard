import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const InspectingModal = (props) => (
  <Modal centered size="lg" show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        Inspecionando: <em>Artista #{props.artistId}</em>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.contactInfo ? (
        <>
          <h6>Você já adquiriu esse artista!</h6>
          <hr />
          <p>Informações de contato:</p>
          <ul>
            <li>
              <strong>Nome:</strong> {props.contactInfo.name}
            </li>
            <li>
              <strong>E-mail:</strong> {props.contactInfo.email}
            </li>
            <li>
              <strong>Telefone:</strong> {props.contactInfo.phone}
            </li>
          </ul>
        </>
      ) : (
        <>
          <h6 className="text-danger">Você ainda NÃO adquiriu esse artista!</h6>
          <hr />
          <p>Experimente clicar no botão do cifrão verde.</p>
        </>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Voltar</Button>
    </Modal.Footer>
  </Modal>
);

export default InspectingModal;
