import React, { useEffect, useRef } from "react";
import { ImageProps } from "./Tweet";
type Props = {
  setImageInputs: React.Dispatch<React.SetStateAction<ImageProps[]>>;
  imageInputs: ImageProps[];
};
import { PhotoIcon } from "@heroicons/react/24/outline";
function TweetImages({ setImageInputs, imageInputs }: Props) {
  const imageFileRef = useRef<HTMLInputElement | null>(null);
  const handleImageInputs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const reader = new FileReader();
    if (event.target.files) {
      reader.readAsDataURL(event.target.files[0]);
    }
    let imagesArray: ImageProps[] = [...imageInputs];
    reader.onload = (readerEvent) => {
      if (imagesArray.length === 2) {
        imagesArray[0].imgURL = readerEvent.target?.result as string;
        return setImageInputs(imagesArray);
      }
      imagesArray.push({imgURL:readerEvent.target?.result as string ,imgID:Math.random()});
      setImageInputs(imagesArray);
    };
  };
  useEffect(() => {}, [imageInputs]);
  return (
    <div onClick={() => imageFileRef.current?.click()}>
      <PhotoIcon
        width={18}
        className="text-[#1D9BF0] cursor-pointer icons-hover"
      />
      <input
        type="file"
        hidden
        ref={imageFileRef}
        value=""
        onChange={handleImageInputs}
      />
    </div>
  );
}

export default TweetImages;
