
import React,{useState} from 'react'
import { AppBar,Toolbar ,Typography,Stack,Autocomplete, TextField,Rating} from '@mui/material'
import './App.css'

const App = () => {
  const[search,setsearch]=useState('')
  const[value,setvalue]=useState([])
const submitHandler=e=>
{
  e.preventDefault();
  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=e3d4ab8b&app_key=1cb6e4175c59ccdd9cd6863877ae3aba`).then(
    response=>response.json()
  ).then(date=>setvalue(date.hits))
}
  return (
    <div>
     <Stack> <AppBar>
        <Toolbar>
          <Typography className='food'>Food</Typography>
          <div className='div'> <form onSubmit={submitHandler}>
      <TextField value={search} onChange={(e)=>setsearch(e.target.value)} label='search' sx={{bgcolor:"white"}} className='text'></TextField>
        <input type="submit" value="search" className='btn btn-success'/>
      </form></div>
        </Toolbar>
      </AppBar></Stack>
   <center> 

      <div className='row'>
      {value.length>=1?value.map(item=><div className='col sm-4'><div class="card" style={{width:300}}>
  <img class="card-img-top" src={item.recipe.image} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">{item.recipe.label}</h4>
<Stack><Rating></Rating></Stack>
<button className='btn btn-primary'>buy</button>
  </div>
</div></div>):<center className='cent'>search<div class="spinner-border"></div></center>}</div>
      </center>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.crazymasalafood.com/wp-content/images/2022/03/Mutton-Chaps.jpg" alt="Los Angeles" class="d-block w-100" width="400"/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMi7WlpRQm5GGLKDAA4YLEPZwSdfXmxxbVQ&usqp=CAU" alt="Chicago" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="New York" class="d-block w-100"/>
    </div>
  </div>

  
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
    </div>
  )
}

export default App