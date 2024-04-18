import { ReactChatbot } from "@vectara/react-chatbot";
import Logo from "../assets/images/equacare.png"

const Chatbot = () => (
  <>
    <div className="container-fluid">
  <div className="row">
    <div className="col-12 text-center">
      <h1 style={{ color: "#156082", fontWeight: "bold", fontSize: "40px" }}>
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

    <ReactChatbot title="Chat with EquaCare" placeholder="Type your Query?" />
  </>
);
export default Chatbot;

// customerId="29746375"
// corpusIds="3"
// apiKey="zqt_AcXkxwyKoj6M45VSTlSnizzu0WOVaDpRJCJ67Q"
// title="Vectara Docs Chatbot"
// placeholder='Try "What is Vectara?" or "How does RAG work?"'
// inputSize="large"
// enableStreaming={true}
// language="eng"
