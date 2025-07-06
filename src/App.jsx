import { Route, Routes } from "react-router-dom";
import Hero from "./componets/Hero";
import ThemeShowcase from "./componets/ThemeShowcase";
import Login from "./pages/login";
import Editor from "./pages/Editor";
import { Toaster } from "react-hot-toast";
import Errorpage from "./pages/Errorpage";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "rgb(var(--color-bg-secondary))",
              color: "rgb(var(--color-text-primary))",
              border: "1px solid rgb(var(--color-border-primary))",
              boxShadow: "var(--shadow-themed-md)",
              padding: "16px 20px",
              fontSize: "0.875rem",
              borderRadius: "0.75rem",
              minWidth: "260px",
              maxWidth: "400px",
            },
            success: {
              iconTheme: {
                primary: "rgb(var(--color-success))",
                secondary: "rgb(var(--color-bg-primary))",
              },
            },
            error: {
              iconTheme: {
                primary: "rgb(var(--color-error))",
                secondary: "rgb(var(--color-bg-primary))",
              },
            },
          }}
        ></Toaster>
      </div>
      <div className="min-h-auto">
        <Hero />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:rmid" element={<Login />} />
          <Route path="/editor/:roomId" element={<Editor />} />
          <Route path="/t" element={<ThemeShowcase />} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>


        <footer className="bg-secondary text-primary p-4 w-full fixed bottom-0 text-center border-t border-primary">
          <p>&copy; {currentYear} ShareBin. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
