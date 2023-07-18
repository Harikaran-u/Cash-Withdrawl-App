// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withDrawMoney = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    const homePage = (
      <div className="home-page-cont">
        <div className="withdraw-cont">
          <div className="user-profile-cont">
            <p className="logo">J</p>
            <h1 className="user-name">John Cena</h1>
          </div>
          <div className="balance-cont">
            <p className="balance">Your Balance</p>
            <div className="amount-cont">
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="denominations-cont">
            <p className="withdraw-name">Withdraw</p>
            <p className="withdraw-info">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="amount-list-cont">
            {denominationsList.map(eachItem => (
              <DenominationItem
                amountList={eachItem}
                key={eachItem.id}
                withDrawFunc={this.withDrawMoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
    return homePage
  }
}

export default CashWithdrawal
