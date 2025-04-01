const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lol-blue">LoL Builder</span>
        </a>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <a href="/champions" className="transition-colors hover:text-lol-blue">
            Champions
          </a>
          <a href="/builds" className="transition-colors hover:text-lol-blue">
            Popular Builds
          </a>
          <a href="/guides" className="transition-colors hover:text-lol-blue">
            Guides
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;