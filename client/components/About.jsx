import React from "react";
import { connect } from "react-redux";
import { getTextByURL } from "../actions/text";
import { Link } from "react-router-dom";
import { clearText } from "../actions/text";
import { thanks } from "./thanks";

function About({ weather, dispatch }) {
  function findBackgroundImg() {
    if (weather) {
      var hour = new Date(Date.parse(weather.local_time_rfc822)).getHours();
      console.log(hour);
      if (hour < 6) {
        return "/assets/images/background-evening-01.svg";
      } else if (hour == 6) {
        return "/assets/images/background-about-sunrise-01.svg";
      } else if (hour >= 7 && hour <= 16) {
        return "/assets/images/background-about-daytime-01.svg";
      } else if (hour == 17) {
        return "/assets/images/background-about-sunrise-01.svg";
      } else if (hour >= 18) {
        return "/assets/images/background-evening-01.svg";
      }
    }
  }

  var divStyle = {
    backgroundImage: "url(" + findBackgroundImg() + ")"
  };

  console.log(typeof weather.local_time_rfc822);
  return (
    <div style={divStyle} className="about-page-row">
      <a
        className="text about-back"
        href="#"
        onClick={() => dispatch(clearText())}
      >
        <span className="te-reo">Whakahoki atu ki te timatanga</span>
        <span className="english">Return Home</span>
      </a>

      <div className="about-page-column-eight">
        <div className="aboutcontainer">
          <div className="abouttext">
            <div className="about-main-title">
              <h1 className="text">
                <span className="english">About</span>
                <span className="te-reo">Tō mātou kaupapa</span>
              </h1>
            </div>
            <div className="text-main-section">
              <div className="about-secondary-title">
                <h2 className="text">
                  <span className="english">Who are we?</span>
                  <span className="te-reo">Kō wai mātou?</span>
                </h2>
              </div>
              <div className="who-are-we-body">
                <img
                  className="about-page-image"
                  src="/assets/images/group.jpg"
                />
                <p className="text">
                  <span className="english">
                    We are Ben Tairea, Laura Suzuki, Anthony Gordon, Zach
                    Mandeville and Maddy King. Ben came up with the vision to
                    use Augmented Reality across Aotearoa to reveal the history
                    and stories of this land.
                  </span>
                  <span className="te-reo">
                    Kō Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville
                    and Maddy King. I toko ake te whakaaro i roto i a Ben ki te
                    whakaaara i a Augmented Reality kia whai wāhi ai ngā hītori
                    me ngā kōrero o ngā whenua o Aotearoa ki te iwi whānui.
                  </span>
                </p>
                <p className="text">
                  <span className="english">
                    We’re a team of developers studying at Enspiral Dev Academy,
                    a web development school based in Wellington and Auckland
                    that is committed to a mission of social good. We have had
                    help and support from a large range of people, who you can
                    read about here.
                  </span>
                  <span className="te-reo">
                    He roopu mātau e ako tonu ana i te wānanga o Enspiral Dev
                    Academy, he wānanga whakatipu tukutuku i runga i te ipurangi
                    i roto o Te Whanganui-ā-Tara me Tamaki Makaurau. E
                    tautokohia ana mātau e te tini tangata, e taea te kitea ko
                    wai ngā rōpu tautoko i roto i nga panui e whai ake nei.
                  </span>
                </p>
                <br />
              </div>
            </div>
            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">What is this?</span>
                <span className="te-reo">He aha tēnei?</span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <img
                className="about-page-image"
                src="https://cheapflights.wpengine.com/wp-content/uploads/2014/07/holiday-spots-from-maori-legends-01.jpg"
              />
              <p className="text">
                <span className="english">
                  Our intentions are to create a tool to educate and inspire
                  people about the deeper aspects of living in Aotearoa, the
                  realms that exist just below the surface or behind the veil of
                  everyday life. Augmented Reality (or AR) is a powerful, almost
                  magical tool for revealing unseen elements. We saw in AR a way
                  to connect the past with the future, to connect the physical
                  world with the spiritual world, and for connecting different
                  facets of Aotearoa. AR_ATUA sees digital technology as a
                  powerful platform for learning about and creating engagement
                  with te ao Māori.
                </span>
                <span className="te-reo">
                  Ko te whakakitenga kia tipu te mātauranaga o te tangata, kia
                  whakaawe hoki i te tangata kia mārama ai ki te hōhonutanga o
                  ngā āhuatanga katoa o te noho i Aotearoa nei. Ko te kaupapa
                  nei a Augmented Reality he hononga ki te ao wairua, he hono i
                  te ao ōnanahi ki te ao o ēnei rā, he hononga hoki ki ngā
                  tūmomo āhuatanga katoa i Aotearoa nei.
                </span>
              </p>
              <p className="text">
                <span className="english">
                  Our larger vision is to develop tools to help educate people
                  about the rich history, legends and stories of the land
                  through accessible and inspired augmented reality. Currently
                  this idea is in the prototype stage, so we are seeing what we
                  can technically achieve as a learning project, in order to
                  engage in larger discussion and consultation before taking it
                  further.
                </span>
                <span className="te-reo">
                  Hēoi anō, ko te tino whakakitengatanga whānui o te rauemi nei,
                  kia whai wāhi ai te hītori, ngā pūrakau, me ngā kōrero tuku
                  iho o te whenua nei a Aotearoa ki te katoa. I tēnei wā, kei te
                  tipu tonu te kaupapa nei, koia tenei ko tana timatanga noa
                  iho. Kei te waihangatia tonu kia kitea te nui o tōna
                  whānuitanga.
                </span>
              </p>
              <p className="text">
                <span className="english">
                  Our first project is inspired by the legend of Tāwhirimātea.
                </span>
                <span className="te-reo">
                  Ko Tāwhirimatea te kaupapa tuatahi hei whakatuwhera i te
                  rauemi nei.
                </span>
              </p>
              <br />
            </div>

            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">Te Reo first.</span>
                <span className="te-reo">Ko te reo i te tuatahi.</span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <img
                className="about-page-image"
                src="https://www.tpk.govt.nz/images/constrain/images-28738/768x1024"
              />
              <p className="text">
                <span className="english">
                  The connection between language and culture is inherent. Words
                  are a method of creating and recording meaning. In this way,
                  language serves as a means of both documentation and living
                  cultural expression. If our aim is to inspire learning and
                  engagement with te ao Māori, we believe that relationship
                  should be grounded in the use of te reo Māori, the first
                  language of Aotearoa.
                </span>
                <span className="te-reo">
                  Ka noho pūmau ki te reo me ōna tikanga, ma te kupu (Māori) e
                  whakamana te kaupapa. Ma tēnei e mana ai te oranga tonutanga o
                  ēnei taonga. Mena ko te whāinga ki te whakaawe i te hono mai o
                  te tangata ki ōna mātauranga Māori, ka tika kia kawea i roto i
                  te reo tuatahi o te whenua nei, te reo Māori.
                </span>
              </p>
              <br />
            </div>

            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">Augmented Reality App</span>
                <span className="te-reo">
                  He taupānga whakaahua, e whakarāwai ana i te kitenga
                </span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <img
                className="about-page-image"
                src="/assets/images/benmaddy.jpg"
              />
              <p className="text">
                <span className="english">
                  The idea of the AR app is to place a representation of
                  Tāwhirimātea on top of Tangi-te-keo (Mount Victoria),
                  Wellington, the windiest place in our world. Tāwhirimātea’s
                  behaviours will respond to the wind, so that people can look
                  up to the atua on Mount Vic to see what the weather is doing.
                  In our work towards this goal, we are testing and pushing very
                  new AR technologies to the limit of what they are currently
                  capable of, so the AR app is a continual work in progress,
                  driven by a powerful vision.
                </span>
                <span className="te-reo">
                  Ko te whāinga o te rauemi nei AR ki te whakatū i te atua nei a
                  Tāwhirimatea ki runga o Tangi-te-keo, Whanganui-ā-Tara, te
                  taumata karawhiuwhiuhia e te hau. Kia āhei te tangata te aro
                  whakarunga atu, kia kite i nga nekehanga o Tawhirimatea e tū
                  mai ana i runga o Tangi-te-keo, e hāngai ana ki te huarere.{" "}
                </span>
              </p>

              <br />
            </div>

            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">The web app.</span>
                <span className="te-reo">Ko te taupānga tukutuku.</span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <img
                className="about-page-image"
                src="/assets/images/zaclaura.jpg"
              />
              <p className="text">
                <span className="english">
                  This web app provides a blueprint for what we are aiming to
                  achieve in the realm of augmented reality. Here you can access
                  our research, view a visualisation of what we are working
                  towards, and find ways to contribute to the project or connect
                  with our team.
                </span>
                <span className="te-reo">
                  Ma te rauemi nei e kitea ai e anga pēhea ana mātau, he aha ngā
                  whāinga e whai atu ana mātau, ngā rangahau, ā, ka āhei hoki te
                  hono me te whakapā mai ki a matau.
                </span>
              </p>
              <br />
            </div>

            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">Free and open source.</span>
                <span className="te-reo">
                  He kaupapa kore utu, he kaupapa nō te mahi tahi
                </span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <img className="about-page-image" src="/assets/images/ant.jpg" />
              <p className="text">
                <span className="english">
                  AR_ATUA upholds a free/libre and open source ethos, which
                  means the resources should be freely available to those
                  interested in them, and that people can adjust and build upon
                  the work we’ve done. We create things with the intention that
                  they can and will be useful to others, by design. This means
                  we write tools that are reusable beyond this app, and code
                  that is easy to read. It means we are committed to accessible
                  technology. We welcome feedback and contributions.
                </span>
                <span className="te-reo">
                  He rauemi kore utu a AR_ATUA e whai wāhi ai ki te tangata e
                  manawanui nei ki ēnei mātauranga, ki ēnei kōrero ahakoa ko
                  wai. Ko te whāinga kia ngāwari noa te whakahaere, te pānui me
                  te whakamahi i te rauemi nei ki te marea. Tēnā whakapā mai
                  mena he whakaaro a koutou hei whakangāwari ake i te whakahaere
                  o te rauemi nei,mena he pātai ranei a koutou.
                </span>
              </p>

              <br />
            </div>

            <div className="about-secondary-title">
              <h2 className="text">
                <span className="english">Thank You</span>
                <span className="te-reo">He mihi</span>
              </h2>
            </div>
            <div className="who-are-we-body">
              <p className="text">
                <span className="english">
                  AR_ATUA would like to send gratitude towards:{" "}
                </span>
                <span className="te-reo">Ānei he mihi maioha ki:</span>
              </p>
              <ul>{thanks.map(person => <li>{person}</li>)}</ul>

              <br />
            </div>
          </div>
          <Link to="/" className="returnbutton">
            <a>
              <h2 className="text">
                <span className="english">Return</span>
                <span className="te-reo">Whakahoki atu ki te timatanga</span>
              </h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ weather, dispatch }) => ({
  weather,
  dispatch
});

export default connect(mapStateToProps)(About);
