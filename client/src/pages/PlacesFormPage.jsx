import PhotosUploader from "../PhotosUploader";
import {useEffect, useState} from "react";
import {Link, useParams,Navigate} from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav";


export default function PlacesFormPage(){
const {id}=useParams();

    const {action} =useParams();
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos]=useState('');
  const [description,setDescription] = useState('');
  const [redirect,setRedirect] = useState(false);

useEffect(() => {
  if(!id){
    return;
  }
axios.get('/places/' + id).then(response => {
    const {data}=response;
    setTitle(data.title);
       setAddress(data.address);
       setAddedPhotos(data.photos);
       setDescription(data.description);
    
});

}, [id]);

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }

  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }

  function preInput(header,description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

async function savePlace(ev){
  ev.preventDefault();

  const placeData = {
    title, address, addedPhotos,
    description, 
  };

  if (id) {
    // update
    await axios.put('/places', {
      id, ...placeData
    });
    setRedirect(true);
  } else {
    // new place
    await axios.post('/places', placeData);
    setRedirect(true);
  }


setRedirect(true);
}

if(redirect){
    return <Navigate to={'/account/places'}/>
}

  return (

    <div>
<AccountNav/>
    <form onSubmit={savePlace}>
    {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
    <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title"/>

{preInput('Address', 'Address to this place')}
<input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>


{preInput('Photos','more = better')}

<PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

{preInput('Description','description of the place')} 
<textarea value={description} onChange={ev => setDescription(ev.target.value)} />


<button className="primary my-4">Save</button>

    </form>
      </div>
  );

}