import useFirestore from "../assets/hooks/useFirestore";

const ImageDisplay  = () => {
  const {docs:  isLoading} = useFirestore('images');
if(isLoading) {
  return(
    <div className="text-center mt-10">
      <progress className="progress w-56"></progress>
    </div>
  )
}

  return (
  <div>
      <div className="card w-[40rem] bg-neutral shadow-xl image-full">
      <figure><img src="" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-base-100 w-70">View</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ImageDisplay