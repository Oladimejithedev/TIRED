import React from 'react'
import '../Stylesheet/home.css'

const Faq = () => {
    const Data = [
        {
            id: 1,
            title: 'What is PEPECEX Project',
            text: 'PEPECEX is a meme Token on #BSC inspired by pepe'       
        },
        {
            id: 2,
            title: 'What are the fees when we make a transaction?',
            text: 'Buy tax: 10% and Sell tax: 10%. Very cheap and easy to buy/sell PEPECEX'             
        },
        {
            id: 3,
            title: 'What are your plans in marketing campaign?',
            text: 'We are dealing with many influencial brands and individuals. Besides, there are also attractive campaigns to develop the community'    
        },
        
    ]
  return (
    <div className="faq" id='faq'>
        <h2>FAQ</h2>
        {Data.map((item)=>
            <div className="faq_data" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        )}
    </div>
  )
}

export default Faq