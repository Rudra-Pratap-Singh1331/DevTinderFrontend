import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Feed = () => {
  const [feed, setFeed] = useState(null);
  const fetchFeed = async () => {
    try {
      const feedresult = await axios.get("http://localhost:1001/user/feed", {
        withCredentials: true,
      });
      // console.log(feed);
      console.log(feedresult.data.UsersToBeShowOnTheFeed);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return <></>;
};

export default Feed;
