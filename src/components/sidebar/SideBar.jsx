import "./SideBar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSet, prevPrompts, setRecentPrompt,newChart } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSet(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chart" onClick={()=>newChart()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title"> Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div className="recent-entry" onClick={()=>loadPrompt(item)} key={index}>
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,17)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
