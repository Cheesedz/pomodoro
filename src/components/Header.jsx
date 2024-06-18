import React, { useState } from 'react'
import menu from '../assets/menu.svg'

function Header() {
    const [visible, setVisible] = useState(false)
    return (
      <>
        <div>
            <button className='menu-button'>
                <image src={menu} alt='menu'/>
            </button>
        </div>
      </>
    )
}

export default Header;