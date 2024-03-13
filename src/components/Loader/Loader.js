const Loader = () => {
  return (<>
    <div className="flex items-center justify-center h-screen">
      <div>
        <span className="relative flex h-16 w-16 mx-auto text-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2488a1] opacity-78"></span>
          <span className="relative inline-flex rounded-full h-16 w-16 bg-[#73deea]"></span>
        </span>
      </div>
    </div>

  </>


  )
}

export default Loader
