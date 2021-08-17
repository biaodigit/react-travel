import React, { useState, useEffect } from 'react'
import { Link } from 'umi'

const Header: React.FC = () => {
    return <div className='header'>
        <div className='header_title'>title</div>
        <div className='header_login'>
            <Link to='/login'>登录</Link> | <Link to='/register'>注册</Link>
        </div>
    </div>
}

export default Header