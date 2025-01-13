// filepath: /Users/talalmahmud/Desktop/my project/next-project/Front-End/blog/src/components/CustomReactQuill.jsx
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const CustomReactQuill = ({
  value,
  onChange,
}: {
  value: any;
  onChange: any;
}) => {
  return (
    <ReactQuill
      className=" bg-white rounded-2xl min-h-[400px]"
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomReactQuill;
