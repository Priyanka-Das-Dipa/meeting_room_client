/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImageToCloudinary = async (file: any) => {
  console.log(process.env.CLOUD_NAME, process.env.UPLOAD_PRESET);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("cloud_name", process.env.CLOUD_NAME as string);
  formData.append("upload_preset", process.env.UPLOAD_PRESET as string);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );
  const data = await res.json();
  return data?.url;
};
