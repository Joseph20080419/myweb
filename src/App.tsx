import React from "react";
import "./App.css";
import MyData from "./data.json"
import WiseCom from "./WiseCom";

const App:React.FC = () => {
  return (
    <div className="container">
      <header>
        <p><span className="txt1">메인</span>공장</p>
        <div>
          <ul>
            <li><a href="#">메뉴1</a></li>
            <li><a href="#">메뉴2</a></li>
            <li><a href="#st3">친구들</a></li>
          </ul>
        </div>
      </header>
      <section id="st1">
        <p>귀여운 비형</p>
        <img className="prophoto" src={process.env.PUBLIC_URL + '/cute b.jpeg'} width={300} />
        <div className="prodesc">
          <ul>
          {MyData.myprofile.map(pro => (
            <li>{pro.name} : {pro.value}</li>
          ))}
          </ul>
        </div>
        <p className="proessay">
        김독자가 소속된 BI-7623 채널을 맡고 있는 하급 도깨비. 전신에 하얀 솜털이 나 있으며 거적데기 한 장만을 걸친 차림을 하고 있다. 
        관리국과 성좌들 몰래 김독자와 전속 계약을 맺어 협력 관계를 유지하고 있다.
        </p>
        <WiseCom />
      </section>
      <section id="st2">
        <p>친구들</p>
        <div>
          <ul>
            {MyData.friend.map(fr => (
              <li>
                <a href={fr.url}>{fr.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="st3">
      </section>
      <footer>
        <p>© 2024. <a href="#">joseph</a> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;