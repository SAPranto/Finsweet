import React, { useState } from 'react';
import './Body.css'

const Body = () => {

  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
    <div className='body-container'>
    <div className='left-column'>
        <h2>How you can contribute to protect Earth</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    </div>   
    <div className='tab-container'>
      <div className='tabs'>
        <li onClick={() => handleTabClick('overview')}>Overview</li>
        <li onClick={() => handleTabClick('impact')}>Impact</li>
        <li onClick={() => handleTabClick('whatyouget')}>What You Get</li>
      </div>
      <div>
        {activeTab === 'overview' && <><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><p>  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p></>}
        {activeTab === 'impact' && <p>This is Impact section Text</p>}
        {activeTab === 'whatyouget' && <p>This is What You get section text</p>}
      </div>
    </div>
    </div>

    </>
  )
}

export default Body