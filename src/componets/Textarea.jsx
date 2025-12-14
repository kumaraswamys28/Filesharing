import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { ACTIONS } from "../../actions";
import { useTheme } from "../ThemeContext";

const Textarea = ({ socketRef, roomId, onCodeChange }) => {
  const [textContent, setTextContent] = useState("");
  const {theme}=useTheme();
  const [theme1, settheme] = useState("vs-dark");

  const handleEditorChange = (value) => {
    const newText = value || ""; // Ensure it's always a string
    setTextContent(newText);

    socketRef.current?.emit(ACTIONS.CODE_CHANGE, {
      roomId,
      code: newText,
    });
    onCodeChange(newText);
  };

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          setTextContent(code);
        }
      });
    }


    (theme === "dark")
      ? settheme("vs-dark")
      : settheme("vs-light");

    return () => {
      socketRef.current?.off(ACTIONS.CODE_CHANGE);
    };
  }, [socketRef.current,theme]);




  const editorOptions = {
    // --- Font & Text ---
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    fontSize: 14, // Sets the font size
    fontWeight: "400", // Sets the font weight
    lineHeight: 24, // Controls the height of each line
    letterSpacing: 0.5, // Space between characters

    // --- Behavior & Editing ---
    wordWrap: "on", // Automatically wraps long lines
    tabSize: 2, // How many spaces a tab character equals
    insertSpaces: true, // Inserts spaces when you press tab
    detectIndentation: true, // Automatically detect tabSize and insertSpaces from file content
    autoClosingBrackets: "languageDefined", // Auto-closes brackets ([, {, ()
    autoClosingQuotes: "languageDefined", // Auto-closes quotes (", ', `)
    quickSuggestions: true, // Show suggestions as you type
    suggestOnTriggerCharacters: true, // Show suggestions when typing trigger chars (like '.')

    // --- Appearance & UI ---
    minimap: {
      enabled: false, // Hides the minimap (as you have)
    },
    lineNumbers: "on", // Show line numbers ('on', 'off', 'relative')
    renderLineHighlight: "all", // Highlights the current line ('none', 'gutter', 'line', 'all')
    scrollBeyondLastLine: false, // Can you scroll past the last line of code?
    roundedSelection: true, // Makes text selection have rounded edges
    glyphMargin: false, // Hides the margin where breakpoints and errors usually appear
    padding: {
      top: 18, // Adds some padding to the top of the editor
      bottom: 18, // Adds some padding to the bottom
    },

    // --- Advanced ---
    automaticLayout: true, // Automatically resizes the editor on window resize
    contextmenu: true, // Enables the right-click context menu
    readOnly: false, // If set to true, the editor becomes non-editable
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col w-full">
      {/* Header section (unchanged) */}
      {/* <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-primary text-lg">Text Editor</h3>
        <div className="text-tertiary text-sm">
          {textContent.length} characters
        </div>
      </div> */}

      <div className="flex-1 w-full min-h-full">
        <Editor
          height="100%"
          width="100%"
          theme={theme1}
          language="javascript"
          value={textContent}
          onChange={handleEditorChange}
          options={editorOptions}
          loading={"Loading editor..."}
        />
      </div>
    </div>
  );
};

export default Textarea;
