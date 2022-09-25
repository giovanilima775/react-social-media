type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return (
    <button className="outline-none bg-brandPrimary/500 hover:bg-brandPrimary/600 active:bg-brandPrimary/700 active:ring-2 ring-brandPrimary/100 text-white font-bold text-base px-4 py-2 rounded-[4px] shadow-md">
      {children}
    </button>
  );
}
