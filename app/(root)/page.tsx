
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'


const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title="welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and tranactions effeciently"

          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 123.50}]}
      />
    </section>
  )
}

export default Home