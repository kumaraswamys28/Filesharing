import { useEffect, useState } from "react";

const Textarea = () => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {}, []);
  const handleTextChange = (e) => {
    setTextContent(e.target.value);
  };
  return (
    <div className="flex-1 min-h-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-primary text-lg">Text Editor</h3>
        <div className="text-tertiary text-sm">
          {textContent.length} characters
        </div>
      </div>
      <textarea
        value={textContent}
        id="text-editor"
        onChange={handleTextChange}
        placeholder="Start typing your content here..."
        className="w-full h-full min-h-[300px] p-4 bg-secondary border border-primary rounded-lg text-primary placeholder:text-tertiary resize-none focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all duration-200"
        style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
        }}
      />
    </div>
  );
};

export default Textarea;
