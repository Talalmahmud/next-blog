// filepath: /Users/talalmahmud/Desktop/my project/next-project/Front-End/blog/src/components/CustomReactQuill.jsx
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CustomReactQuill = ({
  value,
  onChange,
}: {
  value: any;
  onChange: any;
}) => {
  return <ReactQuill value={value} onChange={onChange} />;
};

export default CustomReactQuill;
