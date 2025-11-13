import Link from 'next/link'
const Header: React.FC = ()=>{
    return (
        <header className='bg-blue-600 text-white shadow-md py-4'>
            <div className="container mx-auto flex justify-between items-center px-4">
            <h3>
                <Link href="/">Daily Contents</Link>
            </h3>
            <nav>
                <ul>
                    <li className='hover:underline'>
                        <Link href="/post"></Link>
                    </li>
                    <li className='hover:underline'>
                        <Link href="/users"></Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
        
    )
}

export default Header