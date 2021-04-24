import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import SendMoney from '../components/Forms/Form_SendMoney/SendMoney';


const Page_Home = () => {
  return(
    <div>
        <Navigation />
        <SendMoney />
    </div>
  )
}

export default Page_Home;
