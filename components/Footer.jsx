import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
      <div className='container pt-20 mt-20 align-center'>
          <h1 className='text-center text-gray-700'>Copyright @2023 <span style={{color: 'lightblue'}}>Batch Forum</span>. All Rights Reserved.</h1>
          <h4 className='text-center text-gray-700'>Developed by <Link href='www.jackrigan.com'><span style={{color: 'lightblue', cursor: 'pointer'}}>Jack Rigan</span></Link></h4>
      </div>
    )
}

export default Footer
