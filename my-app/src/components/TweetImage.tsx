import React, { useState } from "react";
import Image from "next/image";
import {ImageProps} from "./Tweet"
import { XMarkIcon } from "@heroicons/react/24/outline";
type Props = {
  imagesNo: number;
  imageProps: ImageProps,
  setRemovedImg: React.Dispatch<React.SetStateAction<ImageProps>>;
};
function TweetImage({ imageProps, imagesNo, setRemovedImg }: Props) {
  const [showImageBTNS, setShowImageBTNS] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setShowImageBTNS(true)}
      onMouseLeave={() => setShowImageBTNS(false)}
      className={`relative w-fit`}
    >
      <div
        className={`absolute w-full h-full gap-y-16 ${
          !showImageBTNS && "hidden"
        }`}
      >
        <button
          className={`${showImageBTNS && "z-10"} image-close-button`}
          onClick={() => setRemovedImg(imageProps)}
        >
          <XMarkIcon width={28} color="rgb(29, 155, 240, 0.9)" />
        </button>
      </div>
      <Image
        alt = ""
        src={imageProps.imgURL || ""}
        width={`${imagesNo > 1 ? "250" : "350"}`}
        height={`${imagesNo > 1 ? "250" : "350"}`}
        key={Math.random()}
        className={`${showImageBTNS && "image-input"}`}
      />
    </div>
  );
}

export default TweetImage;
