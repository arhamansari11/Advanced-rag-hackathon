import { ReactChatbot } from "@vectara/react-chatbot";
export const Chatbot = () => (
  <div>
    <ReactChatbot
      customerId="29746375"
      corpusIds={["3"]}
      apiKey="zut_AcXkxxBdbcnL8hVb7n9sSK2ZDdjxFk6ukQsCvg"
      title="Vectara Docs Chatbot"
      placeholder='Try "What is Vectara?" or "How does RAG work?"'
      inputSize="large"
      enableStreaming={true}
      language="eng"
    />
  </div>
);

export default Chatbot