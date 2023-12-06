import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"

export const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return
      }      
      setLoading(false);
      setError(null)
      navigate('/signin')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  }

  console.log(formData);
  return (
    <div className="max-w-2xl p-3 mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg" onChange={handleChange} />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder="password" id="password" className="border p-3 rounded-lg" onChange={handleChange} />
        <button type="submit" disabled={loading} className="bg-green-500 text-white p-3 rounded-lg hover:opacity-80 disabled:opacity-90 uppercase text-lg">{loading? 'loading' : 'Sign Up'}</button>
              
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ? </p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in here</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
