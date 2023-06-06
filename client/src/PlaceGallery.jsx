export default function PlaceGallery({place}){
  return(

    <div className="relative">

    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
      <div>
        {place.photos?.[0] &&(
            <div> 
                 <img className=" rounded-2xl shrink object-cover aspect-square" src={'http://localhost:4000/uploads/'+place.photos[0]} alt=""/>
            </div>
          
        )}
      </div>
<div className=" grid">
{place.photos?.[1] &&(
           <img className=" aspect-square object-cover " src={'http://localhost:4000/uploads/'+place.photos[1]} alt=""/>
        )}
<div className="overflow-hidden">
{place.photos?.[2]  &&(
           <img className="aspect-square object-cover " src={'http://localhost:4000/uploads/'+place.photos[2]} alt=""/>
        )}
</div>
</div>
</div>
</div>
  );

}