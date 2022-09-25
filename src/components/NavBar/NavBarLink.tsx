type Props = {
  href: string;
  children: React.ReactNode;
};

export function NavBarLink({ href, children }: Props) {
  return (
    <a href={href} className="font-bold text-base">
      {children}
    </a>
  );
}
