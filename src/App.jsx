
import './App.css'
import Home from './components/Home'
import markWebberAvatar from '../src/assets/images/avatar-mark-webber.webp'
import angelaGray from '../src/assets/images/avatar-angela-gray.webp'
import jacobThompson from '../src/assets/images/avatar-jacob-thompson.webp'
import rizkyHasanuddin from '../src/assets/images/avatar-rizky-hasanuddin.webp'
import kimberlySmith from '../src/assets/images/avatar-kimberly-smith.webp'
import nathanPeterson from '../src/assets/images/avatar-nathan-peterson.webp'
import annaKim from '../src/assets/images/avatar-anna-kim.webp'
import chess from '../src/assets/images/image-chess.webp'

function App() {
  const api = [
    {
      id:1,
      name: 'Mark Webber',
      action: 'reacted to your recent post',
      adic: 'My first tournament today!',
      time: '1m ago',
      image: markWebberAvatar,
      active: true
    },
    {
      id: 2,
      name: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      image: angelaGray,
      active: true
    },
    {
      id: 3,
      name: 'Jacob Thompson',
      action: 'has joined your group',
      adic: 'Chess Club',
      time: '1 day ago',
      image: jacobThompson,
      active: true

    },
    {
      id: 4,
      name: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      time: '5 days ago',
      message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      image: rizkyHasanuddin,
      active: false
    },
    {
      id: 5,
      name: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week ago',
      image: kimberlySmith,
      active: false,
      picshared: chess
    },
    {
      id:6,
      name: 'Nathan Peterson',
      action: 'reacted to your recent post',
      adic: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      image: nathanPeterson,
      active: false
    },
    {
      id: 7,
      name: 'Anna Kim',
      action: 'left the group',
      adic: 'Chess Club',
      time: '2 weeks ago',
      image: annaKim,
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
