const SearchInputComponent = (props) => {

  const getFilterValue = (e) => {
    props.filter(e.target.value)
  }

  return (
    <div className="w-1/2 mx-auto my-12">
      <div className="mt-1 relative rounded-md shadow-sm">
        <input type="text"
               name="price"
               id="price"
               className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 sm:text-sm border-gray-300 rounded-md"
               placeholder="London"
               onChange={getFilterValue}/>
      </div>
    </div>
  )
}

export default SearchInputComponent
