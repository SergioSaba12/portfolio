// components/sections/Navigation.jsx
import { memo } from "react";

const Navigation = memo(function Navigation() {
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
            <div className="container-apple">
                <div className="flex items-center justify-between h-16">
                    <a href="#top" className="flex items-center gap-2 font-semibold text-lg">
                        Sergio Sabater
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <a className="link-apple" href="#aintegra">AIntegra</a>
                        <a className="link-apple" href="#work">Work</a>
                        <a className="link-apple" href="#awards">Awards</a>
                        <a className="link-apple" href="#skills">Skills</a>
                        <a className="link-apple" href="#contact">Contact</a>
                    </nav>

                    <a href="#contact" className="btn-apple btn-apple-primary text-sm">
                        Let's talk
                    </a>
                </div>
            </div>
        </header>
    );
});

export default Navigation;
