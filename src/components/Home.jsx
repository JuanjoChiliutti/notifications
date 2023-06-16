import { useState } from 'react'
import '../styles/Home.css'
import { useEffect } from 'react';

function Home({api}) {
 const [apiData, setApiData] = useState(api)
 const [counter, setCounter] = useState(0)
 
 useEffect(() => {
  const count = apiData.reduce((accumulator, item) => {
    if (item.active) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  setCounter(count);
}, [apiData]);

  const handleClick = (itemID) => {
    setApiData(prevApiData => {
      return prevApiData.map(item => {
        if(item.id === itemID) {
          return {
            ...item,
            active: !item.active,
          };
        } 
        return item
      })
    })
  }
  const handleClickBtn= () => {
    setApiData(prevApiData => {
      return prevApiData.map(item => {
        return {
          ...item,
          active: false,
        }
        
      })
    })
  }

  return (
    <div className='contenedor-principal'>
        <div className="notifications-items">
          <div className="notifications-bar">
              <div className='notiff'><div className='notif'>Notifications </div> <div className="notif-counter">{counter}</div></div>
              <button className='btn-mark' onClick={handleClickBtn}>Mark all as read</button>
          </div>
        {apiData.map(item => (
          <div key={item.id} >
          <div className={!item.active?'todo':'todo active'} onClick={() => handleClick(item.id)}>
            <div className='user-image'><img src={item.image} alt='' /></div>
            <div className='user-description'>
              <div className='user-inline'>
                <span className='bold-black text-hover'>{item.name} </span><span className='font-gray'>{item.action} </span>{item.adic && <span className='bold-gray'>{item.adic}</span>}{item.active && <span className='redpoint'>•</span>}
              </div>
    
              <div className='font-gray'>{item.time}</div>

            </div>
            {item.picshared && <div className='picshared'><img src={item.picshared} alt="" /></div>}
          </div>
                {item.message && <div className='user-message'><p>{item.message}</p></div>}
          </div>
        ))}
        </div>

    </div>
  )
}

export default Home