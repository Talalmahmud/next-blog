import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill's styling

type Props = {
  setContent: any;
};
const QuillEditor = ({ setContent }: Props) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Initialize Quill
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
        placeholder: "Write something amazing...",
      });

      // Optionally log the content when the user types
      quillInstance.current.on("text-change", () => {
        const content = quillInstance.current?.root.innerHTML || "";
        setContent(content);
      });
    }

    // Cleanup
    return () => {
      if (quillInstance.current) {
        quillInstance.current.off("text-change");
        quillInstance.current = null;
      }
    };
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Quill Editor</h2>
      <div
        ref={editorRef}
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#fff",
        }}
      ></div>
    </div>
  );
};

export default QuillEditor;
