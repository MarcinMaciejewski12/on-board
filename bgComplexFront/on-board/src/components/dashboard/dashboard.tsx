import { DashboardViewContainer,DashboardView, GameCollectionContainer ,ListContainer, GamesValuesContainer} from './DashboardStyle';
// import axios from "axios";
// import { useQuery } from "react-query";




const Dashboard = () => {
//  const { isLoading, error, data } = useQuery({
//    queryKey: ['data'],
//    queryFn: () => axios.get('/games').then((res)=> res.data),
// })
const games = [
   {
      name: 'name',
      difficulty: 4,
      players: 4,
   }
]
   return (<DashboardViewContainer>
      <DashboardView>
         <h1>Twoja kolekcja gier:</h1>
         <GameCollectionContainer>
         <ListContainer>
            <GamesValuesContainer />
         </ListContainer>
         </GameCollectionContainer>
      </DashboardView>
   </DashboardViewContainer>)
}

export default Dashboard;