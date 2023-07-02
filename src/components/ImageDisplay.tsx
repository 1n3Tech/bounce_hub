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
    <div className="flex flex-row items-center justify-centers w-full flex-1">
  <div className="carousel carousel-center space-x-3 w-full rounded-box">
    {pics.map((image) => (
      <div id="item" key={image.imageUrl} className="card w-full bg-neutral shadow-xl image-full">
      <figure><img src={image.imageUrl} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Movie 1!</h2>
        <p>Woa is this the first Movie?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-base-100 w-70">View</button>
        </div>
      </div>
    </div>
    ))}
  </div>
  </div>
  )
}

export default ImageDisplay