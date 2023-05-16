import axios from "axios";
import { useQuery } from "react-query";

const Dashboard = () => {
 const { isLoading, error, data } = useQuery({
   queryKey: ['data'],
   queryFn: () => axios.get('/games').then((res)=> res.data),
})

console.log(data);
   return <div>
      
   </div>
}

export default Dashboard;