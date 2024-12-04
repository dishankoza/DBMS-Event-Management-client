import axios from "axios";

const uploadImage = async (file: any) => {
  // const url = process.env.NEXT_PUBLIC_CLOUDINARY_URL as string;

  // const formData = new FormData();

  // formData.append(
  //   "upload_preset",
  //   process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string
  // );

  // formData.append("file", file);

  // const result = await axios.post(url, formData);
  // return result?.data?.secure_url;
  return "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export default uploadImage;
