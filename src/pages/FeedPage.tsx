import {
  Button,
  FeedCardList,
  Logo,
  NavBar,
  NavBarLinks,
  UserNameLarge,
  UserNameSmall,
} from 'components';

export function FeedPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
  ];

  return (
    <>
      <NavBar>
        <Logo />
        <div className="flex items-center justify-center gap-4">
          <NavBarLinks items={navLinks} />
          <UserNameSmall
            userName="User Name 2"
            src="/img/pexels-kelvin-valerio-617278.jpg"
            onClick={() => {}}
          />
          <Button>
            <span className="">Create new Post</span>
          </Button>
        </div>
      </NavBar>
      <section className="w-full max-w-5xl py-12 m-auto grid grid-col-1 lg:grid-cols-[1fr,380px]">
        <section className="w-full">
          <FeedCardList
            list={new Array(10).fill({
              userSrc: '/img/pexels-kelvin-valerio-617278.jpg',
              userName: 'GL',
              feedSrc: '/img/pexels-kelvin-valerio-617278.jpg',
              defaultLiked: true,
              likesCount: 30,
              description:
                'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem.',
            })}
          />
        </section>
        <section>
          <UserNameLarge name="Giovani Lima" userName="GL" />
        </section>
      </section>
    </>
  );
}
