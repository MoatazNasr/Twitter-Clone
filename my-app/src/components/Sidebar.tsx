import React from "react";
import Image from "next/image";
import twitterLogo from "../../public/icons8-twitter.svg";
import userImage from "../../public/default_profile_bigger.png";
import { HomeIcon } from "@heroicons/react/20/solid";
import {
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";
function Sidebar(): JSX.Element {
  return (
    <section className="h-screen fixed top-0">
      <div className="flex flex-col ml-16">
        <div className="mb-3 sidebar-link  grid place-content-center">
          <Image src={twitterLogo} width={30} height={30} alt = ""/>
        </div>
        <ul className="flex flex-col text-xl">
          <SidebarLink Icon={<HomeIcon width={30} />} text="Home" />
          <SidebarLink Icon={<HashtagIcon width={30} />} text="Explore" />
          <SidebarLink Icon={<BellIcon width={30} />} text="Notifications" />
          <SidebarLink Icon={<EnvelopeIcon width={30} />} text="Messages" />
          <SidebarLink Icon={<BookmarkIcon width={30} />} text="Bookmarks" />
          <SidebarLink Icon={<ClipboardIcon width={30} />} text="Lists" />
          <SidebarLink Icon={<UserIcon width={30} />} text="Profile" />
          <SidebarLink
            Icon={<EllipsisHorizontalCircleIcon width={30} />}
            text="More"
          />
        </ul>
        <button className="tweet-btn text-lg mt-6 p-3 w-56">Tweet</button>
        <div className=" absolute bottom-5 flex items-center sidebar-link ">
          <Image
            src={userImage}
            className=" rounded-full"
            width={40}
            height={40}
            alt = ""
          />
          <div className="ml-3">
            <p className="font-bold">Moataz Nasr</p>
            <p className="text-sm text-neutral-500">@MoatazNasr13</p>
          </div>
          <EllipsisHorizontalIcon width={25} className="ml-12" />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
