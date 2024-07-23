

export default function Navbar(){
    return (
        <>
            <header className="fixed w-full h-auto z-50 bg-[rgba(0,0,0,0.8)] ">
                <nav className="w-10/12 mx-auto py-8 flex justify-between">
                    <div className="">
                        <a href="#" className="text-white font-bodoni-moda text-3xl">SiraTin</a>
                    </div>
                    <ul className="flex gap-10 text-white">
                        <li><a href="">About me</a></li>
                        <li><a href="">My Demos</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}