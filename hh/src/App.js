
import  './dt.css';

import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
/*import Wu from './Wu';
import Aa from './Aa';*/
/*import Pro from './Pro';*/
/*import Proj from './Proj';*/
/*import Projec from './Projec';*/
/*import Project from './Project';*/
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
// import Project1 from './Project1';
import Project from './Project';
import Navbar from './Navbar';
import Projectlogin from './Projectlogin';
import Projectterms from './projectterms';
import Projectsignin from './Projectsignin';
import Projectsignup from './Projectsignup';
import Projectcontact from './Projectcontact';
/*import Butt from './Butt';*/
import Po from './Po';
import PrivateComponet from './PrivateComponent';
import Updatepassword from './Updatepassword';
function App() {
 /* const a=[
    { image:"logo192.png", name:"Tanisha", address:"Sakchi"},
      { image:"logo192.png", name:"Tanisha", address:"Sakchi"},
        { image:"logo192.png", name:"Tanisha", address:"Sakchi"},
        ]
  return (
    <>
    <div className='main'>
    {a.map((item)=>
    {
      return <Dt image={item.image} name={item.name} address={item.address}/>
    }
    )
    }
    </div>
    </>
  );
}*/
return(
<BrowserRouter>
{/* <Navbar/> */}
<Routes>
  <Route path='/' element={<Project/>}/>
  <Route  element={<PrivateComponet/>}>
  <Route path='/project1' element={<Project1/>}/>
  <Route path='/project2' element={<Project2/>}/>
  <Route path='/project3' element={<Project3/>}/>
  <Route path='/contact' element={<Projectcontact/>}/>
  <Route path='/terms' element={<Projectterms/>}/>
  <Route path='/po/:heading/:package1/:PackageType/:PackageLocation/:image' element={<Po/>}/>

  </Route>
  <Route path='/update' element={<Updatepassword/>}/>
  <Route path='/admin' element={<Projectlogin/>}/>
  <Route path='/signin' element={<Projectsignin/>}/>
  <Route path='/signup' element={<Projectsignup/>}/>
</Routes>
</BrowserRouter>
)
}
export default App;
