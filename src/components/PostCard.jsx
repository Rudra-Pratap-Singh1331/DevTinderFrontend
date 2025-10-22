import { FaHeart, FaRegCommentDots, FaShareAlt } from "react-icons/fa";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
import { useSelector } from "react-redux";

const PostCard = ({ post }) => {
  //fetching my photourl for comment purpose!!

  const user = useSelector((store) => store.user);

  const { postContent, postPhotoUrl, createdAt, userId } = post;
  const { designation, fullName, photoUrl, _id } = userId;

  //converting the mongodb time to local time
  const localtime = new Date(createdAt).toLocaleString();
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1e1e1e] border border-[#2d2d2d] rounded-xl shadow-md p-5 mt-6 transition-all duration-300 hover:shadow-lg hover:border-[#3a3a3a]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={photoUrl || AVATAR_DEFAULT_URL}
          alt="profile"
          className="w-12 h-12 rounded-full ring-2 ring-blue-500/30"
        />
        <div>
          <h3 className="text-[#e5e5e5] font-semibold text-lg">{fullName}</h3>
          <span>{designation}</span>{" "}
          <p className="text-sm text-[#9ca3af]">{localtime}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-[#e5e5e5] leading-relaxed mb-4">{postContent}</p>

      {/* Post Image */}
      {postPhotoUrl ? (
        <div className="rounded-md overflow-hidden border border-[#2f2f2f] mb-4">
          <img
            src={postPhotoUrl}
            alt="Post"
            className="w-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      ) : null}

      {/* Actions */}
      <div
        className="flex justify-around items-center border-t border-[#2f2f2f] pt-3 text-[#d1d5db]"
        // onClick={handleOnLike}
      >
        <button
          className={`flex items-center gap-2 hover:text-blue-500 transition-colors`}
        >
          {/* {like.count} */}
          <FaHeart className="text-lg" /> Likes
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <FaRegCommentDots className="text-lg" /> Comments
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <FaShareAlt className="text-lg" /> Share
        </button>
      </div>

      {/* Comment Box */}
      <div className="flex items-center gap-3 mt-4">
        <img src={user.photoUrl} alt="user" className="w-9 h-9 rounded-full" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="input input-sm w-full bg-[#252526] border border-[#2d2d2d] text-[#e5e5e5] placeholder:text-[#9ca3af] focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default PostCard;
