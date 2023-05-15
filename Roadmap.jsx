import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import  '../Stylesheet/home.css'


const Road = [
    {
        id: 1,
        title: 'Phase 1: Q2 2023',
        cent: '0%',
        texts: [
            'Launch PEPE CEX Dex',
            'Introduce Pepe cex staking',
            'Launchpad Deployment',

        ]       
    },
    {
        id: 2,
        title: 'Phase 2:',
        cent: '50%',
        texts: [
            'Pepe Cex native blockchain development',
            'Expansion of Pepe Cex ecosystem',
            'CMC and CG listings',

        ]              
    },
    {
        id: 3,
        title: 'Phase 3:',
        cent: '100%',
        texts: [
            'Integrate Pepe Cex with other blockchain network',
            'Launch an additional dapps on Pepe Cex',
            'Further development and optimization on our technology',
            
        ]    
    },
    
]
const Roadmap = () => {
  return (
    <div id='roadmap' className="roadmap">
        <h2>PEPE CEX <br /> <span>ROADMAP</span></h2>
        <div className="road">
        {Road.map((item)=>
            <div className="road_data" key={item.id}>
                <div className="heading">
                   <h3>{item.title}</h3>
                    <p>{item.cent}</p> 
                </div>
                
                <ul>
                    {item.texts.map((point) =>
                         <li key={point}><span><HiOutlineArrowNarrowRight/></span>{ point }</li>
                    )}
                </ul>

                
            </div>
            
        )}
        </div>
    </div>
  )
}

export default Roadmap