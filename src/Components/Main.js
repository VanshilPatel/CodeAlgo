import React, { useState } from "react";

import "../Styles/Main.css";

import Data from "./data.json";
import Tick from "../Assets/tick.svg"

function Main() {
    var solved = 0; //for total no of solved question

    const [page, setPage] = useState(1);

    function selectPageHandler(selectedPage) {
        if (selectedPage >= 1 && selectedPage <= Data.length / 10 && selectedPage !== page) {
            setPage(selectedPage);
        }
    }

    return (
        <React.Fragment>
            <div className="main-div">
                <div className="main-div-left">
                    <div className="md-lft-tp">
                        <button className="nav-btn md-btn">Filter</button>
                        <input type="text" placeholder="Search" className="search-main" />
                    </div>

                    <div className="md-lft-btm">

                        <div className="tbl-hd status">
                            <p className="head-main">Status</p>
                            <div className="tbl-clm">
                                {
                                    Data.slice(page * 10 - 10, page * 10).map((Data) => {
                                        return <p key={Data.id} className={Data.id % 2 === 0 ? "dark" : "light"}>
                                            {Data.status === "Solved" && <img className="tick-img" src={Tick} alt="img" />}
                                        </p>
                                    })
                                }
                            </div>
                        </div>
                        <div className="tbl-hd title">
                            <p className="head-main">Title</p>
                            <div className="tbl-clm">
                                {
                                    Data.slice(page * 10 - 10, page * 10).map((Data) => {
                                        return <p key={Data.id} className={Data.id % 2 === 0 ? "dark" : "light"}>
                                            {Data.id}.{Data.title}
                                        </p>
                                    })
                                }
                            </div>
                        </div>

                        <div className="tbl-hd acceptance">
                            <p className="head-main">Acceptance</p>
                            <div className="tbl-clm">
                                {
                                    Data.slice(page * 10 - 10, page * 10).map((Data) => {
                                        return <p key={Data.id} className={Data.id % 2 === 0 ? "dark" : "light"}>
                                            {Data.acceptance}
                                        </p>
                                    })
                                }
                            </div>
                        </div>

                        <div className="tbl-hd difficulty">
                            <p className="head-main">Difficulty</p>
                            <div className="tbl-clm">
                                {
                                    Data.slice(page * 10 - 10, page * 10).map((Data) => {
                                        return <p key={Data.id} className={[Data.id % 2 === 0 ? "dark" : "light", Data.difficulty === "Easy" ? "grn" : Data.difficulty === "Medium" ? "yellow" : "red"].join(' ')}>
                                            {Data.difficulty}
                                        </p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-div-right">
                    <div className="rht-streak">
                        <p>Current Streak:1🔥</p>

                    </div>
                    <div className="rht-crc">
                        {
                            Data.forEach((Data) => {
                                if (Data.status === "Solved") {
                                    solved++;
                                }
                            })
                        }
                        <p className="crc-l1">{solved}</p>
                        <hr style={{ width: "3rem", height: "1px", border: "0", backgroundColor: "#4A4A4A" }} />
                        <p className="crc-l1">{Data.length}</p>
                        <p style={{ fontSize: "18px", color: "#4A4A4A" }}>Solved</p>
                    </div>
                </div>
            </div>

            <div className="footer-btn">
                <button className="ft-btn1" onClick={() => selectPageHandler(page - 1)}>B</button>
                {
                    [...Array(Data.length / 10)].map((_, i) => {
                        return <button className={page === i + 1 ? "selected-pg-btn" : "ft-btn1"} onClick={() => selectPageHandler(i + 1)}>{i + 1}</button>
                    })
                }
                <button className="ft-btn1" onClick={() => selectPageHandler(page + 1)}>F</button>
            </div>
        </React.Fragment >
    )
}

export default Main

