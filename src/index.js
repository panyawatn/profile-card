import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม.",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ${hour}:${minutes}:${second} น.`;
}

function MyDateTime() {
  let date1 = new Date();
  date1 = toThaiDateString(date1);
  return <div style={{ margin: "40px" }}>{date1}</div>;
}

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
      <MyDateTime />
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Unity" emoji="💪" color="cyan" />
      <Skill skill="HTML" emoji="👍" color="red" />
      <Skill skill="PHP" emoji="💪" color="orange" />
      <Skill skill="React" emoji="🐥" color="yellow" />
      <Skill skill="MySQL" emoji="👍" color="orangered" />
      <Skill skill="Pyhton" emoji="👍" color="blue" />
      <Skill skill="Bootstrtap" emoji="👍" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายปัญญวัฒน์ สุภาคาร</h1>
      <p>
        นักศึกษาระดับ ปริญญษโท สาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบในเทคโนโลยีและคอมพิวเตอร์
        ชอบเรียนรู้สิ่งใหม่ๆ
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="panyawatn.jpg" alt="Panyawatn Suphakarn" />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
