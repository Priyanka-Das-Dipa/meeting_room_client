import { Button, Upload, UploadProps } from "antd";

const props: UploadProps = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },

};
const MultipleImage: React.FC = () => {
  return (
    <Upload {...props}>
      <Button >Upload</Button>
    </Upload>
  );
};

export default MultipleImage;
