export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
            <span className="font-serif text-sm font-bold uppercase tracking-wider">
                Shardul Sawant
            </span>
            <button className="font-sans text-sm tracking-wide hover:opacity-60 transition-opacity">
                Menu
            </button>
        </header>
    );
}
