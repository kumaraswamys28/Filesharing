import { Route, Routes } from "react-router-dom";
import Hero from "./componets/Hero";
import ThemeShowcase from "./componets/ThemeShowcase";
import Login from "./pages/login";
import Editor from "./pages/Editor";
import { Toaster } from "react-hot-toast";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4ade80",
              },
            },
          }}
        ></Toaster>
      </div>
      <div className="min-h-auto">
        <Hero />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/editor/:roomId" element={<Editor />} />
          <Route path="/t" element={<ThemeShowcase />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

        <footer className="bg-secondary text-primary p-4 w-full fixed bottom-0 text-center border-t border-primary">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
