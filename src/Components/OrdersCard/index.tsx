export const OrdersCard = ({ totalPrice, totalProducts }: {totalPrice: number, totalProducts: number}) => {
  return (
    <div className="flex justify-between items-center mb-2 shadow-md rounded-lg p-2">
      <p>
        <span>01.02.23</span>
        <span>{totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  )
}
