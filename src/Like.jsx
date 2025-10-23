import { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const[click , setClick] = useState(0);
  const handleClick = () => {
    setIsLiked(!isLiked);
    {!isLiked ? setClick(click + 1) : setClick(click)};
  };

  return (
    <>
     <button onClick={handleClick}>
     You got {click} Likes
  <i
    className={`fa-heart ${isLiked ? "fa-solid" : "fa-regular"}`}
    style={{ color: isLiked ? "red" : "black" }}
  ></i>
</button>


      
    </>
  );
}
