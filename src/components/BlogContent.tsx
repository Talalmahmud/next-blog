type Props = {
  content: any;
};
const BlogContent = ({ content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content || "" }} />;
};

export default BlogContent;
