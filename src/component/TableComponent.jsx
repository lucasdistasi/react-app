import TableRowComponent from "./TableRowComponent";

const TableComponent = (props) => {

  const allTasks = props.allTasks

  return (
    <div className="flex flex-col mt-12 container mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col"
                    className="px-8 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {
                allTasks.map(task => {
                  return <TableRowComponent task={task} key={task.id} deleteTask={props.deleteTask}
                                            updateTaskStatus={props.updateTaskStatus}/>
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
