// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, updateBalance} = props
  const {value} = denomination

  const onChangeNumber = () => {
    updateBalance(value)
  }

  return (
    <li className="order">
      <button className="button" type="button" onClick={onChangeNumber}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
