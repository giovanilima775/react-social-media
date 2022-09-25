import { Button, Logo, NavBar, NavBarLinks } from './components';

function App() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/' },
    { label: 'Login', href: '/' },
  ];

  return (
    <div className="App p-10">
      <NavBar>
        <Logo />
        <div className="flex items-center justify-center gap-4">
          <NavBarLinks items={navLinks} />
          <Button>
            <span className="">Create new account</span>
          </Button>
        </div>
      </NavBar>
    </div>
  );
}

export default App;
