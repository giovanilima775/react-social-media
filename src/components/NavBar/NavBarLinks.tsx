import { NavBarLink } from './NavBarLink';

type Props = {
  items: { label: string; href: string }[];
};

export function NavBarLinks({ items }: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      {items.map((item, index) => (
        <NavBarLink key={index} href={item.href}>
          {item.label}
        </NavBarLink>
      ))}
    </div>
  );
}
