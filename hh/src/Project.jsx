import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
/*import Butt from "./Butt";*/
function Project() {
  const a = [
    {
      Paris: {
        heading: "Package Name:Swiss Paris Delight Premium 2020",
        package1: "group package",
        PackageType: "Package Type: Group Package",
        PackageLocation: "Package Location: Paris",
        image:
          "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1581490262_2_1.jpg",
      },
      Kerala: {
        heading: "Kerala-A Lovers Paradise-Value",
        package1: "added",
        PackageType: "Package Type: Family Package",
        PackageLocation: "Package Location : Kerala",
        image:
          "https://th.bing.com/th/id/OIP.kJwjsY3EJhgDEJbiQQo3xwAAAA?rs=1&pid=ImgDetMain",
      },
      Bali: {
        heading: "Package Name: Soulmate SpecialBali - 7 Nights",
        package1: "added",
        PackageType: "Package Type: Couple Package",
        PackageLocation: "Package Location: Indonesia(Bali)",
        image:
          "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/10/07104639/Bali-Indonesia.jpg",
      },
    
  }];

  return (
    <>
      <Navbar />
     
        <div data-aos="fade-up" data-aos-duration="3000" className="m7">
          <img
            width="1525px"
            height="800px"
            src="pexels-freestockpro-1008155.jpg"
            alt="img not found"
          />
          <h1 className="jj">tourism Management system </h1>
        </div>
        <div className="m8">
          <div data-aos="zoom-out-up" className="m81">
            <img
              height="50px"
              width="50px"
              src="https://th.bing.com/th/id/OIP.zAvtDGShk_9AQZwzGqWRAwHaK5?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="m812">
              <h2>UP TO 50% OFF</h2>
              <h3>TRAVEL SMART</h3>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="m82">
            <img
              height="50px"
              width="50px"
              src="https://www.svgrepo.com/show/406069/letter-h.svg"
              alt=""
            />
            <div className="m822">
              <h2>UP TO 70% OFF</h2>
              <h3>ON HOTELS ACROSS WORLD</h3>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="m83">
            <img
              height="50px"
              width="50px"
              src="https://static.vecteezy.com/system/resources/previews/014/441/091/original/mobile-phone-icon-design-in-blue-circle-png.png"
              alt=""
            />
            <div className="m832">
              <h2>FLAT USD. 50 OFF</h2>
              <h3>US APP OFFER</h3>
            </div>
          </div>
        </div>
       
        <div className="padd"> 

        <div className="m16">
          <div className="m9">
            <h1 id="aa">Package List</h1>
          </div>
          <div data-aos="zoom-out-up" className="m10">
            <div className="m101">
              <img
                height="200px"
                width="400px"
                src="https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1581490262_2_1.jpg"
                alt=""
              />
            </div>
            <div className="m102">
              <h1 id="aa">Package Name:Swiss Paris Delight Premium 2020</h1>
              <h1 id="aa">(Group Package)</h1>
              <h3>Package Type : Group Package</h3>
              <h4>Package Location : Paris and Switzerland</h4>
              <h4><strong>Features</strong>Round trip Economy class airfare valid for the duration of the holiday . Airport taxes - Accommodation for 3 nights in Paris and 3 nights in scenic Switzerland - Enjoy continental breakfasts every morning - Enjoy 5 indian dinners in Mainland Europe - Exp</h4>
            </div>
            <div className="m103">
              <div className="m1031">
                <h2>Rs 6000</h2>
              </div>
              <div className="m1032">
              <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Paris"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Paris"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Paris"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
                            </div>
            </div>
          </div>
          <br />
          <div data-aos="zoom-out-left" className="m11">
            <div className="m111">
              <img
                height="200px"
                width="400px"
                src="https://th.bing.com/th/id/OIP.kJwjsY3EJhgDEJbiQQo3xwAAAA?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="m112">
              <h1 id="aa">Package Name: Kerala-A Lovers Paradise-Value</h1>
              <h1 id="aa">Added</h1>
              <h3>Package Type : Family Package</h3>
              <h4>Package Location : Kerala</h4>
              <h4><strong>Features</strong>Kerala's culture and traditions, coupled with its varied demographics, have made the state one of the most popular tourist destinations in India. In 2012, National Geographic's Traveller magazine named Kerala as one of the "ten paradises of the world" and "50 must see destinations of a lifetime". Travel and Leisure also described Kerala as "One of the 100 great trips for the 21st century". In 2012, it overtook the Taj Mahal to be the number one travel destination in Google's search trends for India. CNN Travel listed Kerala among its '19 best places to visit in 2019'. Kerala was named by TIME magazine in 2022 among the 50 extraordinary destinations to explore in its list of the World's Greatest Places.</h4>
            </div>
            <div className="m113">
              <div className="m1131">
                <h2>Rs 1000</h2>
              </div>
              <div className="m1132">
              <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Paris"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Paris"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Paris"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div data-aos="zoom-out-right" className="m12">
            <div className="m121">
              <img
                height="200px"
                width="400px"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/10/07104639/Bali-Indonesia.jpg"
                alt=""
              />
            </div>
            <div className="m122">
              <h1 id="aa">Package Name: Soulmate SpecialBali - 7 Nights</h1>
              <h3>Package Type : Couple Package</h3>
              <h4>Package Location : Indonesia(Bali)</h4>
              <h4><strong>Features</strong>Tourism in Bali is a major industry, with a significant share of international tourists. It is known for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The island is also known for its highly developed cuisine and hospitality.</h4>
            </div>
            <div className="m123">
              <div className="m1231">
                <h2>Rs 3000</h2>
              </div>
              <div className="m1232">
              <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Paris"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Paris"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Paris"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Paris"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div data-aos="fade-up" data-aos-duration="3000" className="m13">
            <div className="m131">
             <button className="boxes4"><Link to="/project2">View More Packages</Link></button> 
            </div>
          </div>
          <br/>
          <br />
          <br />
          <br />
         
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="m14">
            <div className="m141">
              <img
                height="50px"
                width="50px"
                src="https://th.bing.com/th/id/R.5d50aec561007eb5a29b2c73a978b60a?rik=Aw6git0217MgVA&riu=http%3a%2f%2fdhruvaschools.org%2fimg%2fEnquiry.png&ehk=5YVlzkFmRZydf55K759SK9EYtIFje4dD5QLu1ddHhKI%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="m1412">
                <h2 id="cc">80000</h2>
                <h3>Enquiries</h3>
              </div>
            </div>
            <div className="m142">
              <img
                height="50px"
                width="50px"
                src="https://th.bing.com/th/id/OIP.-FTO4HAIK00Z9peYBmsAiQHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
              <div className="m1422">
                <h2 id="cc">1900</h2>
                <h3>Registered Users</h3>
              </div>
            </div>
            <div className="m143">
              <img
                height="50px"
                width="50px"
                src="https://cdn2.vectorstock.com/i/1000x1000/76/01/increasing-rate-vector-8027601.jpg"
                alt=""
              />
              <div className="m1432">
                <h2 id="cc">7,00,00,000+</h2>
                <h3>Bookings</h3>
              </div>
            </div>
          </div>
        
          </div>
          <div className="m15" data-aos="fade-up" data-aos-duration="3000">
            <div class="wrapper">
         <div class="icon facebook">
            <div class="tooltip">
               Facebook
            </div>
            <span><i class="fab fa-facebook-f"></i></span>
         </div>
         <div class="icon twitter">
            <div class="tooltip">
               Twitter
            </div>
            <span><i class="fab fa-twitter"></i></span>
         </div>
         <div class="icon instagram">
            <div class="tooltip">
               Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
         </div>
         <div class="icon github">
            <div class="tooltip">
               Github
            </div>
            <span><i class="fab fa-github"></i></span>
         </div>
         <div class="icon youtube">
            <div class="tooltip">
               YouTube
            </div>
            <span><i class="fab fa-youtube"></i></span>
         </div>
      </div>
            <div className="m152">
              <h4 id="bb">© Copyright 2024, The Journey. All rights reserved.</h4>
            </div>
</div>
    </>
  );
}

export default Project;
