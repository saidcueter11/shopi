export const ProductCard = () => {
  return (
    <article className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 px-3 py-0.5 bg-white/60 rounded-lg text-black text-xs">Electronics</span>

        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

        <button className="absolute top-2 right-2 flex justify-center items-center rounded-full bg-white w-6 h-6">+</button>

      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$ 300</span>
      </p>
    </article>
  )
}
