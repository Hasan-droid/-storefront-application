import { when } from 'q';
import React from 'react'
import { When } from 'react-if';
import { connect } from 'react-redux'
import { active , inactive } from '../store/store'
import { Button ,Typography} from '@material-ui/core'

function Categories(props) {
    return (
       <>
       {  console.log('props: ',props)}
       {/* { props.categories.items.map((item , idx)=>
       <>
        
       <spam style={{display:'inline' , padding:'10px'}} onClick={()=>props.showTV(item.name)}>{item.name}</spam>

       <h2>  {item.display}</h2>
       </>
       
       )

       } */}
         <div>
            <Typography variant="h5" component='h4'> Browse A Category: </Typography>

            <Button style={{ margin: '20px 10px' }} id="card-buttons" size="small" variant="contained" color="primary" onClick={() => props.active('tvs')}>TVS</Button>
            <Button style={{ margin: '20px 10px' }} size="small" variant="contained" color="primary" onClick={() => props.active('books')}>Books</Button>
        </div>
          
       
        
           
       
       </>
    )


}

const mapStateToProps=state=>({
    categories:state.catogries
});

const mapDispactchToProps={active , inactive};

export default connect(mapStateToProps , mapDispactchToProps)(Categories)
