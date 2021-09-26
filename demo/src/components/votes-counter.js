import { connect } from "react-redux";
import { increment, reset , consoleer } from "../store/votes";

const VotesCounter = props => {
    console.log("mapStateToProps: ",props.counter )
    return (
        <section>
            <ul>
                {/* {props.counter.candidates.map((person, idx) => {
                    { console.log("person data", person.name) }
                    <li key={idx} onClick={() => props.increment(person.name)}>
                        {person}:{person.votes}
                        {console.log("{person.name}", person)}
                    </li>
                })
                } */}
                
                {props.counter.candidates.map((person, idx) =>(
                    <>
                      {console.log("person: ", person)}
                     <li key={idx} onClick={() => props.increment(person.name)}>{person.name} : {person.votes}</li>
                   
                     </>
                   
                )
                
           )}
            </ul>
            <button onClick={props.reset}>Reset everything</button>
            <button onClick={props.consoleer}>console</button>
        </section >
    )
}

// const VotesCounter = props => {
//     return (
//         <section>
//             <ul>
//             {props.counter.candidates.map((person, idx) =>
//                 <li key={idx} onClick={()=>props.increment(person.name)}>{person.name} : {person.votes}</li>
//             )}
//             </ul>
//             <button onClick={props.reset}>Reset everything</button>
//         </section>
//     )
// }

//state that excists in the reducer
const mapStateToProps = state => ({
    
    counter: state.counter,
  
});


const mapPitchToProps = { increment, reset , consoleer  };
export default connect(mapStateToProps, mapPitchToProps)(VotesCounter)