import {
  Button,
  FeedGrid,
  Logo,
  NavBar,
  NavBarLinks,
  UserDetailed,
  UserNameSmall,
} from 'components';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
  ];

  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo />
        </Link>
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

      <section className="w-full max-w-5xl py-12 m-auto grid grid-col-1">
        <section className="w-full flex items-center justify-center p-4">
          <UserDetailed
            name={'username'}
            userName={'Giovani Lima'}
            postCount={5}
            followersCount={10}
            followingCount={10}
            biography={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure natus eum in magni nostrum beatae. Odit, iusto doloremque? Molestiae perferendis maiores aliquid facere recusandae dolorem nemo magni est dolor?'
            }
          ></UserDetailed>
        </section>
        <section className="w-full p-4">
          <FeedGrid
            items={new Array(10).fill({
              imgSrc: '/img/pexels-cottonbro-4786270.jpg',
              description: 'Lorem Ipsum',
            })}
          />
        </section>
      </section>
    </>
  );
}
