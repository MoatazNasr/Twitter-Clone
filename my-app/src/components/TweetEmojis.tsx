import React, {useState} from 'react'
import Picker from "@emoji-mart/react";
import {
    FaceSmileIcon,
  } from "@heroicons/react/24/outline";
type Emoji = {
    native: string;
    unified: string;
    id: string;
    keywords: [];
  };
type Props = {
    setTextInput: React.Dispatch<React.SetStateAction<string>>;
    textInput: string;
}

function TweetEmojis({setTextInput, textInput}: Props) {
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const handleEmojisInput = (emoji: Emoji): void => {
      setTextInput(textInput + emoji.native);
    };
  return (
    <div className="relative">
    {showEmojis && (
      <div className="absolute top-10 before:absolute before:border-transparent before:border-b-[#1d9bf0] before:border-8 before:-top-4 before:left-3">
        <Picker
          theme="dark"
          set="twitter"
          onEmojiSelect={handleEmojisInput}
        />
      </div>
    )}
    <button
      className="text-[#1D9BF0] icons-hover"
      onClick={() => setShowEmojis(!showEmojis)}
    >
      <FaceSmileIcon width={18} />
    </button>
  </div>
  )
}

export default TweetEmojis