import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchComment = (postId) => {
  const [fetchedComments, setFetchedComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchComments = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:1001/posts/${postId}/comments`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setFetchedComments(res?.data?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { fetchedComments, loading };
};

export default useFetchComment;
