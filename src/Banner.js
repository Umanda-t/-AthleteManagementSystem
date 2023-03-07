import { Image } from 'antd';
import 'antd/dist/antd.css'
import './Home.css';


function Banner() {
 
    return (
      <div  style={{  position: 'relative', align:'center', color: 'white' }}>
      <Image
      width={1270}
      height={700}
       src="https://i.postimg.cc/d0PtLnNW/pngtree-a-vector-illustration-of-athletes-in-different-sports-poster-picture-image-1770551.png"  alt="bannerbg" 
      
    />
    <div class="centered"  style={{  position: 'absolute',top:'50%',left: ' 50%',transform: 'translate(-50%, -50%)'}}>
      <center><h1 style={{  color: 'Black'}}> <b>Athletes Management System </b>  </h1> </center>
      <br></br>
      <h4 style={{  color: '#ffff'}} >
    </h4>

       </div>
    </div>
    );
  }
  
  export default Banner;