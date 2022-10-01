import { LikeButton, UserNameSmall } from 'components';
import { useState } from 'react';

export type FeedCardProps = {
  userSrc: string;
  userName: string;
  feedSrc: string;
  defaultLiked?: boolean;
  likesCount?: number;
  description: string;
};

export function FeedCard({
  userSrc,
  userName,
  feedSrc,
  defaultLiked = false,
  likesCount,
  description,
}: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(defaultLiked);
  return (
    <div className="rounded-[4px] shadow-md">
      <div className="flex flex-col items-start justify-center p-2">
        <UserNameSmall userName={userName} src={userSrc} />
      </div>
      <div>
        <img
          src={feedSrc}
          alt="feed"
          className="w-full h-[500px] object-contain"
        />
      </div>
      <div>
        <div className="p-2 w-full flex justify-start">
          <LikeButton
            count={likesCount}
            isLiked={isLiked}
            onClick={() => setIsLiked((prev) => !prev)}
          />
        </div>
        <div className="pt-0 px-2 pb-2">
          <p className="text-justify leading-5">
            <strong>{userName}</strong> {description}
          </p>
        </div>
      </div>
    </div>
  );
}
