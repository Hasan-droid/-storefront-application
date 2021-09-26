import { connect } from "react-redux";

const Status=props=>{

    return(
        <section>
            {props.counter.totalVotes}
        </section>
    )

    
    
}

const mapStateToProps=state=>({
    counter:state.counter
});

export default connect(mapStateToProps)(Status)