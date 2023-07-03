import { Container, Header } from "./PersonsCardStyle";


const PersonsCard = ()  => {
    const persons = [
        {
            id:1,
            name: 'Wojtek',
            description: '“Pomocy jestem przetrzymywany w serwerowni”',
            star: 5
        },
        {
            id:2,
            name: 'Michał',
            description: '“Pomocy jestem przetrzymywany w serwerowni”',
            star: 5
        },
        
        {
            id: 3,
            name: 'Andrzej',
            description: '“Pomocy jestem przetrzymywany w serwerowni”',
            star: 5,
        }
    ]

 
      
       return <>
       {
           persons.map((person, index)=> {
            
               return (     
                <Container key={index}>
                    <Header>{person.name}</Header>
                    <p>{person.description}</p>
                </Container>
                
            )
        })
       }
       </>
   
    
   
}

export default PersonsCard;