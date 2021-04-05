const LastUpdateComponent = (props) => {

  return (
    <div className="w-1/2 mx-auto my-12 text-center">
      <h1 className="uppercase font-black"> Last update: {props.lastUpdate}</h1>
    </div>
  )
}

export default LastUpdateComponent
