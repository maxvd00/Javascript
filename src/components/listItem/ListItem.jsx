import "./listItem.scss";
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons"
import { useState } from "react"

export default function ListItem ({index}) {
  const [isHovered,SetIsHovered] = useState(false);

  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225}}
    onMouseEnter={()=>SetIsHovered(true)} 
    onMouseLeave={()=>SetIsHovered(false)}>
      <img src="https://wallpaperaccess.com/full/6993439.png" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1 Hour 14 mins</span>
          <span className="limit">+16</span>
          <span>2020</span>
          <div className="desc">
            Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Ex autem esse non nisi, minima maiores 
             aliquam. 
             Laborum dicta ex enim amet ea sunt aperiam iusto? Nostrum quam quaerat voluptas nobis.
          </div>
          <div className="gerne">
          Action
          </div>
          
        </div>
      </div>
    </div>
    
  );
}
