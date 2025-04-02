function CartItem() {
  return (
    <div className="grid grid-cols-12 shadow-md mt-4">
      <div className="col-span-3">
        <img
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="image"
        />
      </div>
      <div className="col-span-9 p-4 flex gap-3.5 flex-col">
        <h2 className="font-bold text-2xl">title</h2>
        <p>
          تعداد :<span> 5 </span>
        </p>
        <p className="font-bold ">
          قیمت <span className="text-red-500">525$</span>
        </p>
        <div>
          <button className="px-4 py-2 bg-sky-400 rounded-sm">+</button>
          <span className="p-4">7</span>
          <button className="px-4 py-2 bg-sky-400 rounded-sm">-</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
