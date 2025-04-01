const Hero = () => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-lol-blue from-30% via-lol-blue/90 to-lol-gold bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Master Your Champions<br /><span className="text-lol-gold">Build Your Legend</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Create, optimize, and share your League of Legends champion builds. Stay ahead of the meta with our intuitive build creator and access the community's best strategies.
        </p>
      </div>
      <div className="flex gap-4">
        <a href="/builds/create" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md px-8 bg-lol-blue hover:bg-lol-blue/90 text-lol-dark">
          Create a Build
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
        <a href="/builds" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-lol-gold text-lol-gold hover:bg-lol-gold/10">
          Browse Community Builds
        </a>
      </div>
    </>
  );
}

export default Hero;