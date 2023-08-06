export const OrdersCard = ({ date, totalPrice, totalProducts }: {date:number, totalPrice: number, totalProducts: number}) => {
  const currentDate = new Date(date)
  const displayedTime = currentDate.toDateString()
  return (
    <div className="flex mb-2 shadow-md rounded-lg p-4 hover:bg-slate-100/50 transition-colors">
      <div className="flex items-center w-80 justify-between">
        <p className="flex flex-col">
          <span>{displayedTime}</span>
          <span className="font-light text-sm">Total Items: {totalProducts}</span>
        </p>
        <div className="flex gap-4 items-center">
          <span className="font-medium text-lg">$ {totalPrice}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
