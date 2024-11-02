import React from 'react'
import'./AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-dowmload'>
        <p>For Better Experience Download<br/>Dinner dive App</p>
        <div className='app-download-platforms'>
            <img src={assets} alt=""/>
            <img src="" alt=""/>
        </div>

    </div>
  )
}

export default AppDownload