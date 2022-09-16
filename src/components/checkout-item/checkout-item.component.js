import '../checkout-item/checkout-item.styles.scss'

const CheckOutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={`${imageUrl}`} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckOutItem
