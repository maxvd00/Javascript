import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type == "movie" ? "Movies" : "Series"}</span>
                    <select name="gerne" id="gerne">
                        <option>Gerne</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/132774/pexels-photo-132774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
            />
            <div className="info">
                <img 
                    src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" 
                    alt="" 
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti accusamus quis beatae amet debitis eveniet neque 
                    nulla ratione quos dolores blanditiis consequuntur, dignissimos laboriosam obcaecati in dicta.
                    Animi, id excepturi.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

