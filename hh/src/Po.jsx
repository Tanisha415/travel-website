import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
function Po() {
  const [From,setFrom]=useState()
    const [To,setTo]=useState()
    const navigate=useNavigate()
  const submitdata = async () => {

    if (!From||!To) {
      alert("plz fill form")
      return false;
    }
    let result = await fetch("http://localhost:5000/data", {
      method: "post",
      body: JSON.stringify({ From,To}),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      // localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      alert("data saved")

    }
    else
    {
      alert("wrong input")
    }
  };
  const { heading, package1, PackageType, PackageLocation, image } =
    useParams();
  return (
    <>
      <Navbar />
      <div data-aos="fade-up" data-aos-duration="3000" className="m7">
        <img
          width="1525px"
          height="300px"
          src="https://th.bing.com/th/id/R.4401c5bcfbfce4a210f38fb25216e03c?rik=A8D%2fFi96SPOerQ&riu=http%3a%2f%2fwww.livatoursandtravels.com%2fimages-products%2fslider2.jpg&ehk=B2FKxn7WyZIOsJA99TN09cpVWUpzlWUoWQwNgBv40CI%3d&risl=&pid=ImgRaw&r=0"
          alt="img not found"
        />
      </div>

      <h1 id="aa">Package Details</h1>
      <div className="cl">
        
      <div className="n10">
        <div data-aos="zoom-out-up" className="m10">
          <div className="m101">
            <img height="200px" width="400px" src={image} alt="" />
          </div>
          <div className="m102">
            <div>
              <h1 id="aa">{heading}</h1>
              <h1 id="aa">{package1}</h1>
              <h3>{PackageType}</h3>
              <h4>{PackageLocation}</h4>
              <h4>
                <strong>Features</strong>Round trip Economy class airfare valid
                for the duration of the holiday . Airport taxes - Accommodation
                for 3 nights in Paris and 3 nights in scenic Switzerland - Enjoy
                continental breakfasts every morning - Enjoy 5 indian dinners in
                Mainland Europe - Exp
              </h4>
            </div>
            <div>
              < form onSubmit={submitdata}action="">
                <div className="m1031">
                  <div>
                    from:
                    <br />
                    <input
                      className="boxes6"
                      onChange={(event)=>{setFrom(event.target.value)}}
                      type="date"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  <div>
                    to:
                    <br />
                    <input
                      className="boxes6"
                      onChange={(event)=>{setTo(event.target.value)}}
                      type="date"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                 
                  </div>
                  </form>
              
              <div className="m1032">
                <p>
                  Grand Total <br />
                  <b>Rs 6000</b>
                </p>
              </div>
            </div>
          </div>
          <div></div>
          
      </div>
      <div className="m1034">
            <h3 id="aa"> Package Details</h3>A holiday Package for the entire
            Family
          </div>
        </div>
      <div className="olol">
        <h2 id="aa">Travels</h2>
        <h4>Comment</h4>
          <input className="olol1" type="text"/>
          <button className="boxes4" onClick={submitdata}>Book</button>
        
        </div>
      

      </div>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="fade-up" data-aos-duration="3000" className="m15">
        <div className="m151">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-google"></i>
        </div>
        <div className="m152">
          <h4 id="bb">@ 2020 TMS . All Rights Reserved</h4>
        </div>
      </div>
    </>
  );
}

export default Po;
