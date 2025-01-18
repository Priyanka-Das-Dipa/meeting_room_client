/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImageToCloudinary = async (file: any) => {
  // console.log(import.meta.env.CLOUD_NAME, process.env.UPLOAD_PRESET);
  console.log("this is", import.meta.env.CLOUD_NAME);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("cloud_name", import.meta.env.CLOUD_NAME as string);
  formData.append("upload_preset", import.meta.env.UPLOAD_PRESET as string);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.CLOUD_NAME
    }/image/upload`,
    { method: "POST", body: formData }
  );
  const data = await res.json();
  return data?.url;
};