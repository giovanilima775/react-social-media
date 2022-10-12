import classNames from 'classnames';

type Props = {
  name: string;
  userName: string;
  src?: string;
  postCount?: number;
  followersCount?: number;
  followingCount?: number;
  biography?: string;
  onClick?: VoidFunction;
};

export function UserDetailed({
  name,
  userName,
  src = '/img/pexels-kelvin-valerio-617278.jpg',
  postCount = 0,
  followersCount = 0,
  followingCount = 0,
  biography,
  onClick,
}: Props) {
  return (
    <div
      className={classNames(
        'flex flex-col lg:flex-row gap-10 items-center justify-center max-w-2xl',
        {
          'cursor-pointer': !!onClick,
        }
      )}
      onClick={onClick}
    >
      <img
        src={src}
        alt={userName}
        className="w-[150px] h-[150px] rounded-[150px]"
      />
      <div>
        <p className="pb-3 text-center lg:text-left text-2xl">{userName}</p>
        <div className="pb-3 gap-4 flex items-center justify-center lg:justify-start">
          <p className="text-lg">
            <strong>{postCount}</strong> Posts
          </p>
          <p className="text-lg">
            <strong>{followersCount}</strong> Followers
          </p>
          <p className="text-lg">
            <strong>{followingCount}</strong> Following
          </p>
        </div>
        <p className="font-bold text-xl leading-3 pb-3 text-center lg:text-left">
          {name}
        </p>
        <p className="leading-5">{biography}</p>
      </div>
    </div>
  );
}
