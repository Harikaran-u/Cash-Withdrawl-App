// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountList, withDrawFunc} = props
  const {value} = amountList

  const changeMoney = () => {
    withDrawFunc(value)
  }

  const amountPage = (
    <li className="amount-list">
      <button className="amount-btn" type="button" onClick={changeMoney}>
        {value}
      </button>
    </li>
  )

  return amountPage
}

export default DenominationItem
