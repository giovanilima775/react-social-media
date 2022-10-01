import classNames from 'classnames';

type Props = {
  name: string;
  userName: string;
  src?: string;
  onClick?: VoidFunction;
};

export function UserNameLarge({
  name,
  userName,
  src = '/img/pexels-kelvin-valerio-617278.jpg',
  onClick,
}: Props) {
  return (
    <div
      className={classNames('flex gap-2 items-center justify-center', {
        'cursor-pointer': !!onClick,
      })}
      onClick={onClick}
    >
      <img
        src={src}
        alt={userName}
        className="w-[58px] h-[58px] rounded-[28px]"
      />
      <div className="">
        <p className="font-bold">{userName}</p>
        <p className="text-lg leading-3">{name}</p>
      </div>
    </div>
  );
}
