import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useFetchPost = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const fetchPost = async () => {
    try {
      const postData = await axios.get("http://localhost:1001/posts/", {
        withCredentials: true,
      });
      console.log(postData);
      setPost(postData?.data?.data);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Unauthorized!");
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return { post };
};

export default useFetchPost;
