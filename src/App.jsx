
import './App.css'
import Home from './components/Home'

function App() {
  const api = [
    {
      id:1,
      name: 'Mark Webber',
      action: 'reacted to your recent post',
      adic: 'My first tournament today!',
      time: '1m ago',
      image: '../../src/assets/images/avatar-mark-webber.webp',
      active: true
    },
    {
      id: 2,
      name: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      image: '../../src/assets/images/avatar-angela-gray.webp',
      active: true
    },
    {
      id: 3,
      name: 'Jacob Thompson',
      action: 'has joined your group',
      adic: 'Chess Club',
      time: '1 day ago',
      image: '../../src/assets/images/avatar-jacob-thompson.webp',
      active: true

    },
    {
      id: 4,
      name: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      time: '5 days ago',
      message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      image: '../../src/assets/images/avatar-rizky-hasanuddin.webp',
      active: false
    },
    {
      id: 5,
      name: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week ago',
      image: '../../src/assets/images/avatar-kimberly-smith.webp',
      active: false,
      picshared: '../../src/assets/images/image-chess.webp'
    },
    {
      id:6,
      name: 'Nathan Peterson',
      action: 'reacted to your recent post',
      adic: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      image: '../../src/assets/images/avatar-nathan-peterson.webp',
      active: false
    },
    {
      id: 7,
      name: 'Anna Kim',
      action: 'left the group',
      adic: 'Chess Club',
      time: '2 weeks ago',
      image: '../../src/assets/images/avatar-anna-kim.webp',
      active: false
    }
  ]

  return (
    <>
      
      <Home api={api}/>

    </>
  )
}

export default App
