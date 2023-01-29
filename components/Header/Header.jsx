import React, {useEffect, useState} from 'react'


// Components
import Link from 'next/link'
import { getCategories } from '../../services';
import Image from 'next/image';
import Logo from '../../public/Logo.png'


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);



    return (
        <div className='container px-10 mx-auto mb-8'>
            <div className='inline-block w-full py-8 border-b border-blue-400'>
                <div className='block text-red-500 md:float-left'>
                    <Link href='/' cursor='pointer'>
                <Image src={Logo} alt='Batchforum Logo' style={{cursor: 'pointer'}} /> 
                </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='mt-2 ml-4 font-light text-white align-middle cursor-pointer hover:text-emerald-400 font-source md:float-right'>
                                {category.name} <span className='font-bold text-blue-400 thisOne'>| </span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;
