const Terpene = () => {
  return (
    <div className="my-8">
      <div className="text-white w-full bg-red-500 bg-green mb-8 py-2 px-4 text-2xl font-bold rounded-lg">Terpene</div>

      <div className="bg-white dark:bg-black py-14 px-8 rounded-lg flex lg:flex-row flex-col justify-evenly items-center gap-6">
        <div className="font-bold text-xl text-center flex-1">
          <img src="/icons/terpene/myrcene.png" alt="Terpene-icon" width={100} height={100} className="mx-auto" />
          <p className="mt-4">Myrcene</p>
        </div>
        <div className="flex-1 lg:mt-0 mt-8">
          <h3 className="font-bold text-2xl mb-4">Found in</h3>
          <p>Mango, Haps, Lemongrass, Basil, Cardamom, Verbena, wild thyme</p>
        </div>
        <div className="flex-1 lg:mt-0 mt-8">
          <h3 className="font-bold text-2xl mb-4">Effects</h3>
          <p>Mango, Haps, Lemongrass, Basil, Cardamom, Verbena, wild thyme</p>
        </div>
      </div>
    </div>
  )
}

export default Terpene
