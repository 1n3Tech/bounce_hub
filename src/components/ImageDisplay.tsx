import useFirestore from "../assets/hooks/useFirestore";

const ImageDisplay  = () => {
  const {docs: pics, isLoading} = useFirestore('pics');
if(isLoading) {
  return(
    <div className="text-center mt-10">
      <progress className="progress w-56"></progress>
    </div>
  )
}

  return (
  <div>
    {pics.map((image) => (
      <div key={image.imageUrl} className="card w-[40rem] bg-neutral shadow-xl image-full">
      <figure><img src={image.imageUrl} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-base-100 w-70">View</button>
        </div>
      </div>
    </div>
    ))}
  </div>
  )
}

export default ImageDisplay