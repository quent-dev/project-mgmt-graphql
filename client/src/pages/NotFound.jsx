import { FaExclamationTriangle  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <FaExclamationTriangle className='text-danger' size="5em" />
        <h1>404 Page Not Found</h1>
        <p className='lead'>The page you are looking for does not exist. </p>
        <Link to='/' className='btn btn-primary'>Go Back</Link>
    </div>
  )
}
