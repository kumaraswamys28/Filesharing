import { Route, Routes } from "react-router-dom";
import Hero from "./componets/Hero";
import ThemeShowcase from "./componets/ThemeShowcase";
import Login from "./pages/login";
import Editor from "./pages/Editor";
import { Toaster } from "react-hot-toast";
import Errorpage from "./pages/Errorpage";
import { FaGithub } from "react-icons/fa";
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
      <div className="h-min-h-screen z-10 flex flex-col">
        <Hero />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:rmid" element={<Login />} />
          <Route path="/editor/:roomId" element={<Editor />} />
          <Route path="/t" element={<ThemeShowcase />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
      <footer className="bg-secondary text-primary p-4 w-full h-[10vh] z-20 text-center border-t border-primary">
        <p>&copy; {currentYear} ShareBin. All rights reserved.</p>
        <div className="flex mt-[10px] justify-center items-center">
          {/* 2. This is your new link, exactly like the image */}
          <a
            href="https://kumaraswamys28.github.io/project/" // <-- Change this to your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:text-brand hover:underline"
          >
            <FaGithub />
            <span>More Projects</span>
          </a>

          {/* You can add other links here if you want */}
          {/* <a href="/other-link" className="ml-4 hover:underline">
        Another Link
      </a> 
      */}
        </div>
      </footer>
    </>
  );
}

export default App;
