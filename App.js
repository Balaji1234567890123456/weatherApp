import {Component} from "react"
class Weather extends Component{
  state={
    town:"",
    result:""
  }
  onChangeTown=(event)=>{
    this.setState({town:event.target.value})
  }
  onGetResult= async (event)=>{
    const {town}=this.state
    event.preventDefault()
    const a=`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=d885aa1d783fd13a55050afeef620fcb`
    const b={
      method:"GET",
    

    }
    const c=await fetch(a,b)
    if (c.ok){
      const d=await c.json()
      const e=d.main.temp
      const f=Math.round(e-273.15)
      this.setState({result:`The Temperature Of ${town} is ${f}°C `,town:""})
    }

  }
  render(){
    const {town,result}=this.state
  return (

    <>
    <div style={{display:"flex",justifyContent:"center",height:"100vh",flexDirection:"column",alignItems:"center"}}>
      <h1>
        WEATHER REPORT

      </h1>
      <form onSubmit={this.onGetResult}>
      <input type="text" value={town} onChange={this.onChangeTown}/>
      <input type="submit" value="Go"/>
      <p>{result}</p>
      </form>

    </div>
    </>
  )
}
}
export default Weather