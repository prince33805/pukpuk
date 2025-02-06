import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
    <header className='w-full  absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                    src='/111.png'
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
                Chim Puk
            </Link>

            <button className="btn btn-blue">
                Login
            </button>

        </nav>
    </header>
);

export default Navbar;