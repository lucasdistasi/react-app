import React, {useState} from "react"
import swal from 'sweetalert';

const FormTaskComponent = (props) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const formIsValid = (title, description) => {
    if (title.length > 30 || title.length < 3) {
      swal({
        title: "Validation failed",
        text: "Title must be between 3 and 30 characters",
        icon: "error"
      })

      return false
    }

    if (description.length > 30 || description.length < 3) {
      swal("Validation failed", "Description must be between 3 and 30 characters", "error")

      return false
    }

    return true
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (formIsValid(title, description)) {
      props.addTask({
        title, description
      })
    }
  }

  const getTargetValue = (e) => {
    switch (e.target.name) {
      case "task_title":
        if (e.target.value.length < 3 || e.target.value.length > 30) {
          setTitleError(true)
        } else {
          setTitleError(false)
        }
        setTitle(e.target.value)
        break
      case "task_description":
        if (e.target.value.length < 3 || e.target.value.length > 30) {
          setDescriptionError(true)
        } else {
          setDescriptionError(false)
        }
        setDescription(e.target.value)
        break
      default:
        console.error("No field specified")
    }
  }

  return (
    <div className="container mx-auto">
      <div className="mt-10 text">
        <div className="md:grid md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submitForm}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="task_title" className="block text-sm font-medium text-gray-700">Title</label>
                      <input placeholder="Write a title"
                             type="text"
                             name="task_title"
                             id="task_title"
                             autoComplete="given-name"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm
                             sm:text-sm border-gray-300 rounded-md"
                             onChange={getTargetValue}
                             value={title}/>
                      {
                        titleError &&
                        <span className="text-red-600 text-sm medium">Title must be between 3 and 30 characters</span>
                      }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="task_description"
                             className="block text-sm font-medium text-gray-700">Description</label>
                      <input placeholder="Write a description"
                             type="text"
                             name="task_description"
                             id="task_description"
                             autoComplete="family-name"
                             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm
                             sm:text-sm border-gray-300 rounded-md"
                             onChange={getTargetValue}
                             value={description}/>
                      {
                        descriptionError && <span className="text-red-600 text-sm medium">Description must be between 3 and 30 characters</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm
                          font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormTaskComponent
