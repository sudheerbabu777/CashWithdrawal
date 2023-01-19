// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {balance} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="user-name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance} <br /> <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="choose">ChOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="money-list">
            {denominationsList.map(each => (
              <DenominationItem
                denomination={each}
                key={each.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
