import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router";

import { AuthProvider } from "./auth/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
        <BrowserRouter>
      {/* <Layout> */}
          <App />
      {/* </Layout> */}
        </BrowserRouter>
  </AuthProvider>,
);
