import { ReactNode } from "react";
import Header from "../components/Header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-lol-blue/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-lol-gold/10 blur-[100px]" />
      </div>
      <div className="relative z-10">
        <Header />
        <section className="container flex min-h-[calc(100vh-3.5rem-1px)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          {children}
        </section>
      </div>
    </div>
  );
};

export default MainLayout;