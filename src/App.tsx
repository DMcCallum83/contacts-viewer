import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ContactsPage } from "./pages/ContactsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <ContactsPage />
    </QueryClientProvider>
  );
}

export default App;
