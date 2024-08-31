import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Project2() {
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
      Thimphu: {
        heading: "Package Name: Bhutan Holidays- Thimphu",
        package1: "and Paro Special",
        PackageType: "Package Type: Family Package",
        PackageLocation: "Package Location : Bhutan",
        image:
          "https://i.ytimg.com/vi/A5ekx1HP2-g/maxresdefault.jpg",
      },
      Bali: {
        heading: "Package Name: Soulmate SpecialBali - 7 Nights",
        package1: "added",
        PackageType: "Package Type: Couple Package",
        PackageLocation: "Package Location: Indonesia(Bali)",
        image:
          "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/10/07104639/Bali-Indonesia.jpg",
      },
      Dubai: {
        heading: "Package Name: Short Trip to Dubai",
        package1: "added",
        PackageType: "Package Type: Family Package",
        PackageLocation: "Package Location: Dubai",
        image:
          "https://th.bing.com/th/id/R.15d5cf72cc6b9452a7c93df1b6b892cd?rik=Ht8aOCh%2bhb%2bh7w&riu=http%3a%2f%2fvalueadzvisas.com%2fblogpic%2flarge%2f1521792458Dubai.jpg&ehk=rmDY2KAmKm6fAx7C%2fd%2bMTsb9cv5jsRQT2HF5WAgSf30%3d&risl=&pid=ImgRaw&r=0",
      },
      Sikkim: {
        heading: "Package Name: Sikkim Delight with darjeeling",
        package1: "customizable",
        PackageType: "Package Type: Group Package",
        PackageLocation: "Package Location: Sikkim",
        image:
          "https://i.pinimg.com/736x/c3/fd/f4/c3fdf408f38fbd90bd9a48f157832a33.jpg",
      },
      Guwahati: {
        heading: "Package Name: 6 Days in Guwahati and",
        package1: "Shillong With Cherrapunji Excursion",
        PackageType: "Package Type: Family Package",
        PackageLocation: " Package Location: Guwahati(Sikkim)",
        image:
"https://th.bing.com/th/id/OIP.hmsVKF0nJeVb5XtbN61uhAHaFj?rs=1&pid=ImgDetMain",
      },
    },
  ];
  return (
    <>
      <Navbar />
      <div>
        
        <div className="m7"data-aos="fade-up" data-aos-duration="3000">
          <img
            width="1525px"
            height="400px"
            src="https://th.bing.com/th/id/OIP.rA5WuLEpBwf4TvY89OpwzgHaFI?rs=1&pid=ImgDetMain"
            alt="img not found"
          />
        </div>
        <div className="m16">
          <div className="m9">
            <h1 id="aa">Package List</h1>
          </div>
          <div className="m10" data-aos="zoom-out-right">
            <div className="m101">
              <img
                height="200px"
                width="400px"
                src="https://cdn1.tripoto.com/media/filter/nxxl/img/1524784/Image/1577438413_swiss_paris.jpg"
                alt=""
              />
            </div>
            <div className="m102">
              <h1 id="aa">Package Name:Swiss Paris Delight Premium 2020</h1>
              <h1 id="aa">(Group Package)</h1>
              <h3>Package Type : Group Package</h3>
              <h4>Package Location : Paris and Switzerland</h4>
              <h4>
                <strong>Features</strong>Round trip Economy class airfare valid
                for the duration of the
              </h4>
              <h4>
                holiday . Airport taxes - Accommodation for 3 nights in Paris
                and 3 nights in
              </h4>
              <h4>
                scenic Switzerland - Enjoy continental breakfasts every morning
                - Enjoy 5
              </h4>
              <h4>indian dinners in Mainland Europe - Exp</h4>
            </div>
            <div className="m103">
              <div className="m1031">
                <h2>Rs <br /> 6000</h2>
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
          <div className="m11" data-aos="zoom-out-right">
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
              <h4>
                <strong>Features</strong>Kerala's culture and traditions,
                coupled with its varied demographics, have made the state one of
                the most popular tourist destinations in India. In 2012,
                National Geographic's Traveller magazine named Kerala as one of
                the "ten paradises of the world" and "50 must see destinations
                of a lifetime". Travel and Leisure also described Kerala as "One
                of the 100 great trips for the 21st century". In 2012, it
                overtook the Taj Mahal to be the number one travel destination
                in Google's search trends for India. CNN Travel listed Kerala
                among its '19 best places to visit in 2019'. Kerala was named by
                TIME magazine in 2022 among the 50 extraordinary destinations to
                explore in its list of the World's Greatest Places.
              </h4>
            </div>
            <div className="m113">
              <div className="m1131">
                <h2>Rs <br />1000</h2>
              </div>
              <div className="m1132">
                <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Kerala"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Kerala"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Kerala"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Kerala"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Kerala"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="m12"data-aos="zoom-out-right">
            <div className="m121">
              <img
                height="200px"
                width="400px"
                src="https://i.ytimg.com/vi/A5ekx1HP2-g/maxresdefault.jpg"
                alt=""
              />
            </div>
            <div className="m122">
              <h1 id="aa">Package Name: Bhutan Holidays- Thimphu</h1>
              <h1 id="aa">and Paro Special</h1>
              <h3>Package Type : Family Package</h3>
              <h4>Package Location : Bhutan</h4>
              <h4>
                <strong>Features</strong>Free Wi-fi,Free Breakfast,Free Pickup
                and drop facilty
              </h4>
            </div>
            <div className="m123">
              <div className="m1231">
                <h2>Rs <br />3000</h2>
              </div>
              <div className="m1232">
                <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Thimphu"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Thimphu"]["package1"]
                    )}/${encodeURIComponent(a[0]["Thimphu"]["PackageType"])}
                    /${encodeURIComponent(a[0]["Thimphu"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Thimphu"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="m17"data-aos="zoom-out-right">
            <div className="m171">
              <img
                height="200px"
                width="400px"
                src="https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/10/07104639/Bali-Indonesia.jpg"
                alt=""
              />
            </div>
            <div className="m172">
              <h1 id="aa">Package Name: Soulmate SpecialBali - 7 Nights</h1>
              <h3>Package Type : Couple Package</h3>
              <h4>Package Location : Indonesia(Bali)</h4>
              <h4>
                <strong>Features</strong>Tourism in Indonesia is an important
                component of the Indonesian economy as well as a significant
                source of its foreign exchange revenues. Indonesia was ranked at
                20th in the world tourist Industry in 2017, also ranked as the
                ninth-fastest growing tourist sector in the world, the
                third-fastest growing in Asia and fastest-growing in Southeast
                Asia. In 2018, Dénpasar, Jakarta and Batam are among of 10
                cities in the world with fastest growth in tourism, 32.7, 29.2
                and 23.3 percent respectively. The tourism sector ranked as the
                4th largest among goods and services export sectors.
              </h4>
            </div>
            <div className="m173">
              <div className="m1731">
                <h2>Rs <br />5000</h2>
              </div>
              <div className="m1732">
                <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Bali"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Bali"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Bali"]["PackageType"]
                    )}/${encodeURIComponent(
                      a[0]["Bali"]["PackageLocation"]
                    )}/${encodeURIComponent(a[0]["Bali"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="m18"data-aos="zoom-out-right">
            <div className="m181">
              <img
                height="200px"
                width="400px"
                src="https://th.bing.com/th/id/R.15d5cf72cc6b9452a7c93df1b6b892cd?rik=Ht8aOCh%2bhb%2bh7w&riu=http%3a%2f%2fvalueadzvisas.com%2fblogpic%2flarge%2f1521792458Dubai.jpg&ehk=rmDY2KAmKm6fAx7C%2fd%2bMTsb9cv5jsRQT2HF5WAgSf30%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="m182">
              <h1 id="aa">Package Name: Short Trip to Dubai</h1>
              <h3>Package Type : Family Package</h3>
              <h4>Package Location : Dubai</h4>
              <h4>
                <strong>Features</strong>Free Wi-fi,Free Breakfast,Free Pickup
                and drop facilty
              </h4>
            </div>
            <div className="m183">
              <div className="m1831">
                <h2>Rs <br />4500</h2>
              </div>
              <div className="m1832">
                <button className="boxes5"><Link to={`/po/${encodeURIComponent(a[0]["Dubai"]["heading"])}/${encodeURIComponent(a[0]["Dubai"]["package1"])}/${encodeURIComponent(a[0]["Dubai"]["PackageType"])}/${encodeURIComponent(a[0]["Dubai"]["image"])}`}>Details</Link></button>
              </div>
            </div>
          </div>
          <br />
          <div className="m19"data-aos="zoom-out-right">
            <div className="m191">
              <img
                height="200px"
                width="400px"
                src="https://i.pinimg.com/736x/c3/fd/f4/c3fdf408f38fbd90bd9a48f157832a33.jpg"
                alt=""
              />
            </div>
            <div className="m192">
              <h1 id="aa">Package Name: Sikkim Delight with Darjeeling</h1>
              <h1 id="aa">Customizable</h1>
              <h3>Package Type : Group Package</h3>
              <h4>Package Location : Sikkim</h4>
              <h4>
                <strong>Features</strong>Free Breakfast,Free Pickup and drop
                facilty
              </h4>
            </div>
            <div className="m193">
              <div className="m1931">
                <h2>Rs <br />3500</h2>
              </div>
              <div className="m1932">
              <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Sikkim"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Sikkim"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Sikkim"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Sikkim"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Sikkim"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="m20"data-aos="zoom-out-right">
            <div className="m201">
              <img
                height="200px"
                width="400px"
                src="https://th.bing.com/th/id/OIP.hmsVKF0nJeVb5XtbN61uhAHaFj?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="m202">
              <h1 id="aa">Package Name: 6 Days in Guwahati and</h1>
              <h1 id="aa">Shillong With Cherrapunji Excursion</h1>
              <h3>Package Type : Family Package</h3>
              <h4>Package Location : Guwahati(Sikkim)</h4>
              <h4>
                <strong>Features</strong>Breakfast,Accommodation Pickup Drop
                Sightseeing
              </h4>
            </div>
            <div className="m203">
              <div className="m2031">
                <h2>Rs <br />4500</h2>
              </div>
              <div className="m2032">
              <button className="boxes5">
                  <Link
                    to={`/po/${encodeURIComponent(
                      a[0]["Guwahati"]["heading"]
                    )}/${encodeURIComponent(
                      a[0]["Guwahati"]["package1"]
                    )}/${encodeURIComponent(
                      a[0]["Guwahati"]["PackageType"]
                    )}
                    /${encodeURIComponent(a[0]["Guwahati"]["PackageLocation"])}
                    /${encodeURIComponent(a[0]["Guwahati"]["image"])}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
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
      </div>
    </>
  );
}

export default Project2;
