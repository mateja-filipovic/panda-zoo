

type Props = {}

const AddAnimalForm = (props: Props) => {
  return (
    <div className="w-full px-4 py-6 md:px-12">
      <form>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">A short introduction</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        </div>

        <div className="mb-6 md:mb-12">
          <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment...">
          </textarea>
        </div>

        <div className="grid grid-cols-2 mb-6 gap-2 md:grid-cols-3 md:gap-8 md:px-12">

          <div className="h-52 md:h-96">
            <img src="/src/assets/red_coala.jpeg"  className="w-full h-full object-cover"/>
          </div>

          <div className="h-52 md:h-96">
            <img src="/src/assets/lizard.jpeg"  className="w-full h-full object-cover"/>
          </div>

          <div className="h-52 md:h-96">
            <img src="/src/assets/red_coala.jpeg"  className="w-full h-full object-cover"/>
          </div>

          <div className="h-52 md:h-96">
            <img src="/src/assets/lizard.jpeg"  className="w-full h-full object-cover"/>
          </div>

          <div className="h-52 md:h-96">
            <img src="/src/assets/red_coala.jpeg"  className="w-full h-full object-cover"/>
          </div>

          <div className="h-52 md:h-96">
            <img src="/src/assets/lizard.jpeg"  className="w-full h-full object-cover"/>
          </div>

        </div>

        <div className="w-full flex justify-end md:px-12">
          <button className="w-full bg-amber-300 rounded py-2 px-4 mb-4 md:w-fit">Add</button>
        </div>

      </form>
    </div>
  )
}

export default AddAnimalForm