import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className }: Props) {
  return (
    <button
      className={classNames(
        'outline-none bg-brandPrimary/500 hover:bg-brandPrimary/600 active:bg-brandPrimary/700 active:ring-2 ring-brandPrimary/100 text-white font-bold text-base px-4 py-2 rounded-[4px] shadow-md',
        className
      )}
    >
      {children}
    </button>
  );
}
