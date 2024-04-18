import { ReactChatbot } from "@vectara/react-chatbot";
import Logo from "../assets/images/equacare.png";

export const Chatbot = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1
            style={{ color: "#156082", fontWeight: "bold", fontSize: "40px" }}
          >
            Equa Care
          </h1>
          <p style={{ fontSize: "20px" }}>
            Providing equal access to healthcare for patients who find social
            interactions challenging
          </p>
          <img src={Logo} alt="" style={{ width: "300px", height: "auto" }} />
        </div>
      </div>
    </div>
    <ReactChatbot
      customerId="29746375"
      corpusIds={["3"]}
      apiKey="zut_AcXkxxBdbcnL8hVb7n9sSK2ZDdjxFk6ukQsCvg"
      title="Chat with EquaCare"
      placeholder='Type your Questions?"'
      inputSize="large"
      enableStreaming={true}
      language="eng"
    />
  </div>
);

export default Chatbot;
