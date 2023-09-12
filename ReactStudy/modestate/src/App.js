import MenuList from "./modestates/MenuList/MenuList";
import DisplayMood from "./modestates/DisplayMood/DisplayMood";
import MenuListItem from "./modestates/MenuListItem/MenuListItem";
import { useState } from "react";


function App() {

  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>오늘의 기분을 선택해주세요😄</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}
export default App;
