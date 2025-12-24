export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
            <span className="font-sans text-sm font-medium uppercase tracking-[0.2em]">
                Shardul Sawant
            </span>
            <button className="font-sans text-sm font-normal tracking-wide hover:opacity-60 transition-opacity">
                Menu
            </button>
        </header>
    );
}
