import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId }, { withCredentials: true });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            navigate("/");
        } finally {
            setLoading(false);
        }
    };
  useEffect(() => {
    if (success && orderId) {
        verifyPayment();
    } else {
        // Handle missing params (optional)
        navigate("/");
    }
}, [success, orderId]);

  return (
    <div className='verify'>
      {loading ? <div className="spinner"></div> : <div>Redirecting...</div>}
    </div>
  )
}

export default Verify
