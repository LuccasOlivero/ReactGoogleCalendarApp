import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

//talk to supabase

const supabaseUrl = "https://gbppbgnbqpqfkuwgyavq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdicHBiZ25icXBxZmt1d2d5YXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2MzA1MTksImV4cCI6MjAxMDIwNjUxOX0.UAx7iZvsuanQzDFWF3Nl4KuTS8EcJVsqsaZMovRMZ_0";
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
