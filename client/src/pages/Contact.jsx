import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = (e) => {
    e.preventDefault();
    // in a real app you would POST to server
    document.body.insertAdjacentHTML('beforeend', '<div id="sent">Thank you</div>');
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={handle} />
        <input name="email" placeholder="Email" onChange={handle} />
        <textarea name="message" placeholder="Message" onChange={handle} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
