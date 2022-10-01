import { NavBar, Logo, NavBarLinks, Button, Input } from 'components';

export function LoginPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
    { label: 'Login', href: '/' },
  ];
  return (
    <>
      <NavBar>
        <Logo />
        <div className="flex items-center justify-center gap-4">
          <NavBarLinks items={navLinks} />
          <Button>
            <span className="">Create new account</span>
          </Button>
        </div>
      </NavBar>
      <div className="w-full max-w-lg m-auto h-[calc(100vh-80px)] flex flex-col justify-center items-start gap-2">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-lg">Access your account and share your world!</p>
        <Input name="email" id="email" placeholder="Email" type="email" />
        <Input
          name="password"
          id="password"
          placeholder="Password"
          type="password"
        />
        <Button className="w-full">
          <span>Connect</span>
        </Button>
        <p className="text-lg mt-4 w-full text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-brandPrimary/500 font-bold">
            Create new account
          </a>
        </p>
      </div>
    </>
  );
}
