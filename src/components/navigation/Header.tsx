import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Thibault <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation & contact me button */}
        <div className="hidden xl:flex gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">Mobile Navigation</div>
      </div>
    </header>
  );
}
