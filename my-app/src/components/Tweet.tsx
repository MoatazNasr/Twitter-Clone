import React, { useEffect, useState } from "react";
import Image from "next/image";
import userImage from "../../public/default_profile_bigger.png";
import TweetImage from "./TweetImage";
import TweetImages from "./TweetImages";
import { CalendarIcon } from "@heroicons/react/24/outline";
import TweetEmojis from "./TweetEmojis";
export type ImageProps = {
  imgURL: string | null;
  imgID: number;
};
const ImagePropsInitilaizer: ImageProps = {
  imgURL: "",
  imgID: Math.random(),
};
function Input(): JSX.Element {
  const [textInput, setTextInput] = useState<string>("");
  const [imageInputs, setImageInputs] = useState<ImageProps[]>([]);
  const [removedImg, setRemovedImg] = useState<ImageProps>(
    ImagePropsInitilaizer
  );
  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTextInput(event.target.value);
  };
  useEffect(() => {
    if (removedImg?.imgURL !== "") {
      const filteredImages: ImageProps[] = imageInputs.filter(
        (image: ImageProps) => image.imgID !== removedImg.imgID
      );
      setImageInputs(filteredImages);
      setRemovedImg(ImagePropsInitilaizer);
    }
  }, [removedImg]);
  console.log(imageInputs)
  return (
    <div className="flex mt-1 border-b border-b-[#2F3336] pb-4">
      <div className="ml-4">
        <Image
          src={userImage}
          className="rounded-full cursor-pointer"
          width={50}
          height={50}
          alt = ""
        />
      </div>
      <div className="ml-4 w-full">
        <div>
          <input
            className="bg-transparent w-full outline-none placeholder:text-[#5e656a]"
            value={textInput}
            placeholder="What's happening?"
            onChange={handleTextInput}
          />
          <div className={`${imageInputs.length > 1 && "grid grid-cols-2"}`}>
            {imageInputs.length > 0 &&
              imageInputs.map((imageProps, index) => (
                <TweetImage
                  imageProps={{
                    imgURL: imageProps.imgURL,
                    imgID: imageProps.imgID,
                  }}
                  imagesNo={imageInputs.length}
                  key={index}
                  setRemovedImg={setRemovedImg}
                />
              ))}
          </div>
        </div>

        <div className="mt-2 flex justify-between">
          <div className="flex">
            <TweetImages
              setImageInputs={setImageInputs}
              imageInputs={imageInputs}
            />
            <TweetEmojis setTextInput={setTextInput} textInput={textInput} />
            <CalendarIcon
              width={18}
              className="text-[#1D9BF0] cursor-pointer icons-hover"
            />
          </div>
          <button
            className="tweet-btn py-2 px-4 text-base mr-4 disabled:bg-slate-500 disabled:hover:bg-slate-500"
            disabled={!textInput.trim() || imageInputs.length === 0}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
