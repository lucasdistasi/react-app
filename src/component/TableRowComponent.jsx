const TableRowComponent = (props) => {

  const {title, description, done, id} = props.task

  const deleteTask = (e) => {
    e.preventDefault()
    props.deleteTask(e.target.target)
  }

  const updateTaskStatus = (e) => {
    e.preventDefault()
    props.updateTaskStatus(e.target.target)
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {title}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {description}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {
          done ?
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Done
            </span> :
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-red-50">
              Not Done
            </span>
        }
      </td>
      <td className="text-center">
        <div className="inline-flex px-4 py-3 text-center sm:px-6">
          {
            done ?
              <></> :
              <form onSubmit={updateTaskStatus} target={`${id}`}>
                <button type="submit"
                        className="inline-flex justify-center py-1 mx-2 px-5 border border-transparent shadow-sm text-sm
                  font-medium rounded-md text-black bg-indigo-300 hover:bg-blue-200 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-indigo-500">
                  Done
                </button>
              </form>
          }
          <form onSubmit={deleteTask} target={`${id}`}>
            <button type="submit"
                    className="inline-flex justify-center py-1 mx-2 px-4 border border-transparent shadow-sm text-sm
                  font-medium rounded-md text-black bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2
                  focus:ring-offset-2 focus:ring-indigo-500">
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  )
}

export default TableRowComponent

