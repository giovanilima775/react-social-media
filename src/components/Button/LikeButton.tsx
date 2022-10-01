import { HeartIcon } from 'components';
import classNames from 'classnames';
type Props = {
  isLiked?: boolean;
  count?: number;
  onClick?: VoidFunction;
};
export function LikeButton({ isLiked = false, count = 0, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames('flex gap-2 items-center justify-center', {
        'cursor-pointer': !!onClick,
      })}
    >
      <HeartIcon
        fill={isLiked ? '#ff0000' : '#fff'}
        borderColor={isLiked ? '#ff0000' : '#000'}
      />
      <span className="font-bold">
        {count} Like{count === 1 ? '' : 's'}
      </span>
    </button>
  );
}
