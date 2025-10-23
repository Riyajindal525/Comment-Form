import {useState} from 'react';



export default function Form(){
   
const[formData , setFormData ] = useState({
    fullName : "",
    userName : ""
});

const handleChangeInput = (event) => {
  const fieldName = event.target.name;
  const newValue = event.target.value;

  setFormData((currData) => {
    currData[fieldName] = newValue;  // yaha value assign ho rahi hai
    return { ...currData };          // updated object return ho raha hai
  });

  console.log(formData);
};


                  
  return (
    <form>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" t
          placeholder="Enter your name"
          value={formData.fullName} 
          id="fullName"
          name="fullName"
          onChange = {handleChangeInput} />
          <br /> <br /> <hr />
          
        <label htmlFor="userName">User Name</label>
        <input type="text" 
          placeholder="Enter your username"
          value={formData.userName} 
          id="userName"
          name="userName"
          onChange={handleChangeInput} />
        <br /> <hr />
        <button>Submit</button>
    </form>
  )
}