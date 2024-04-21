import { useCallback } from "react";
import styles from "./styles/ChatVishnu.module.css";

const ChatVishnu = () => {
  const onChatVishnuContainerClick = useCallback(() => {
    // Please sync "AdminDash" to the project
  }, []);

  return (
    <div className={styles.chatVishnu} onClick={onChatVishnuContainerClick}>
      <header className={styles.chatVishnuInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.dashboardParent}>
              <h2 className={styles.dashboard}>Dashboard</h2>
              <nav className={styles.frameContainer}>
                <nav className={styles.leavesParent}>
                  <b className={styles.leaves}>Leaves</b>
                  <div className={styles.leadsWrapper}>
                    <b className={styles.leads}>Leads</b>
                  </div>
                  <b className={styles.performance}>Performance</b>
                </nav>
              </nav>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangle} />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <div className={styles.rectangle1} />
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.rahulMajumdarParent}>
                  <div className={styles.rahulMajumdar}>Rahul Majumdar</div>
                  <b className={styles.director}>Director</b>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.lineWrapper}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
      </div>
      <div className={styles.chatVishnuChild}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frame} />
            <div className={styles.frame1} />
            <div className={styles.frame2} />
            <div className={styles.frame3} />
            <div className={styles.frame4} />
            <div className={styles.frame5} />
            <div className={styles.frame6} />
            <div className={styles.frame7} />
            <div className={styles.frame8} />
            <div className={styles.frame9} />
            <div className={styles.frame10} />
            <div className={styles.frame11} />
            <div className={styles.groupParent}>
              <div className={styles.group}>
                <div className={styles.rectangle2} />
                <div className={styles.autoLayoutVertical}>
                  <div className={styles.autoLayoutVertical1}>
                    <h3 className={styles.welcomeBackLalitContainer}>
                      <p className={styles.welcomeBackLalit}>
                        Welcome back Lalit!
                      </p>
                      <p className={styles.checkDashboard}>Check dashboard</p>
                    </h3>
                    <div className={styles.youHaveEarned}>
                      You have earned 54% more than last month which is great
                      thing.
                    </div>
                  </div>
                  <div className={styles.autoLayoutHorizontal}>
                    <div className={styles.autoLayoutVertical2}>
                      <div className={styles.div}>$63,489.50</div>
                    </div>
                    <div className={styles.autoLayoutHorizontal1}>
                      <div className={styles.year2024}>Year 2024</div>
                    </div>
                  </div>
                  <button className={styles.buttonmedium}>
                    <div className={styles.autoLayoutHorizontal2}>
                      <img className={styles.chevLeft} alt="" />
                    </div>
                    <div className={styles.autoLayoutHorizontal3}>
                      <div className={styles.medium}>Check</div>
                    </div>
                    <div className={styles.autoLayoutHorizontal4}>
                      <img className={styles.chevRight} alt="" />
                    </div>
                  </button>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent4}>
                  <div className={styles.partTimeParent}>
                    <b className={styles.partTime}>Part Time</b>
                    <b className={styles.timeAtWork}>Time At Work</b>
                  </div>
                  <b className={styles.h43Min}>2 h 43 min</b>
                </div>
              </div>
              <div className={styles.frameWrapper4}>
                <div className={styles.autoLayoutHorizontalParent}>
                  <div className={styles.autoLayoutHorizontal5}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.autoLayoutHorizontalWrapper}>
                    <button className={styles.autoLayoutHorizontal6}>
                      <div className={styles.vectorWrapper}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                      <div className={styles.autoLayoutHorizontal7}>
                        <b className={styles.h32Min}>2 h 32 min</b>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent5}>
              <div className={styles.frameWrapper6}>
                <div className={styles.lalitSharmaParent}>
                  <b className={styles.lalitSharma}>Lalit Sharma</b>
                  <div className={styles.jayminDaveWrapper}>
                    <b className={styles.jayminDave}>Jaymin Dave</b>
                  </div>
                  <div className={styles.shubhamSadhuWrapper}>
                    <b className={styles.shubhamSadhu}>Shubham Sadhu</b>
                  </div>
                  <div className={styles.rishikeshBoseWrapper}>
                    <b className={styles.rishikeshBose}>Rishikesh Bose</b>
                  </div>
                  <div className={styles.rahulMajumdarWrapper}>
                    <b className={styles.rahulMajumdar1}>Rahul Majumdar</b>
                  </div>
                </div>
              </div>
              <div className={styles.groupGroup}>
                <div className={styles.group1}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                  <div className={styles.div1}>320/490</div>
                  <div className={styles.frameParent6}>
                    <div className={styles.achievedTargetParent}>
                      <div className={styles.achievedTarget}>
                        Achieved Target
                      </div>
                      <div className={styles.autoLayoutHorizontalContainer}>
                        <div className={styles.autoLayoutHorizontal8}>
                          <div className={styles.div2}>65%</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon3}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.autoLayoutVertical3}>
                    <div className={styles.rectangle3} />
                  </div>
                </div>
                <div className={styles.group2}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector2.svg"
                  />
                  <div className={styles.autoLayoutVertical4}>
                    <div className={styles.autoLayoutVertical5}>
                      <div className={styles.salesInProfit}>
                        Sales in profit
                      </div>
                      <div className={styles.div3}>$678,298</div>
                      <div className={styles.autoLayoutHorizontal9}>
                        <div className={styles.autoLayoutHorizontal10}>
                          <img
                            className={styles.callUp}
                            loading="lazy"
                            alt=""
                            src="/call--up.svg"
                          />
                        </div>
                        <div className={styles.div4}>+9%</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.autoLayoutHorizontalFrame}>
                    <div className={styles.autoLayoutHorizontal11}>
                      <div className={styles.rectangle4} />
                      <div className={styles.rectangle5} />
                      <div className={styles.rectangle6} />
                      <div className={styles.rectangle7} />
                      <div className={styles.rectangle8} />
                      <div className={styles.rectangle9} />
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle11} />
                      <div className={styles.rectangle12} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.saly10Parent}>
        <img
          className={styles.saly10Icon}
          loading="lazy"
          alt=""
          src="/saly10@2x.png"
        />
        <div className={styles.frameParent7}>
          <div className={styles.frame12} />
          <div className={styles.group3}>
            <div className={styles.rectangle13} />
            <img
              className={styles.imageIcon2}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <div className={styles.rectangle14} />
          </div>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <div className={styles.group4}>
            <div className={styles.rectangle15} />
            <img
              className={styles.imageIcon3}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <div className={styles.rectangle16} />
          </div>
          <div className={styles.group5}>
            <div className={styles.rectangle17} />
            <img
              className={styles.imageIcon4}
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
            <div className={styles.rectangle18} />
          </div>
          <div className={styles.group6}>
            <div className={styles.rectangle19} />
            <img
              className={styles.imageIcon5}
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
            <div className={styles.rectangle20} />
          </div>
          <div className={styles.group7}>
            <div className={styles.rectangle21} />
            <img
              className={styles.imageIcon6}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <div className={styles.frame13} />
        <div className={styles.frame14} />
        <div className={styles.wrapperVector}>
          <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
        </div>
      </main>
      <div className={styles.group8}>
        <div className={styles.frame15} />
        <b className={styles.topPerformer}>Top Performer</b>
        <div className={styles.jayPaladiya}>Jay Paladiya</div>
        <b className={styles.achieved}>
          <p className={styles.achieved1}>Achieved</p>
        </b>
        <b className={styles.b}>
          <p className={styles.p}>1279</p>
        </b>
        <b className={styles.january2024}>January 2024</b>
        <b className={styles.target}>
          <p className={styles.target1}>Target</p>
        </b>
        <b className={styles.b1}>429</b>
        <b className={styles.achievement}>Achievement</b>
        <div className={styles.rectangle22} />
        <div className={styles.frame16}>
          <div className={styles.shubhamSadhuParent}>
            <h2 className={styles.shubhamSadhu1}>Shubham Sadhu</h2>
            <div className={styles.frameWrapper7}>
              <div className={styles.onlineParent}>
                <div className={styles.online}>{`Online `}</div>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon6}
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameFrame}>
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-2.svg"
            />
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalWrapper1}>
          <div className={styles.autoLayoutHorizontal12}>
            <div className={styles.div5}>04-01-2024</div>
          </div>
        </div>
        <div className={styles.groupInner}>
          <div className={styles.autoLayoutHorizontalGroup}>
            <div className={styles.autoLayoutHorizontal13}>
              <div
                className={styles.heySendMe}
              >{`Hey, send me the Camp Lejeune lead reports `}</div>
            </div>
            <button className={styles.autoLayoutHorizontal14}>
              <div className={styles.expectingTheLead}>
                Expecting the lead count to cross 15 by EOD
              </div>
            </button>
          </div>
        </div>
        <div className={styles.groupChild}>
          <div className={styles.autoLayoutHorizontalParent1}>
            <div className={styles.autoLayoutHorizontal15}>
              <div className={styles.sureWillSend}>
                Sure, Will send you in a bit!
              </div>
            </div>
            <div className={styles.autoLayoutVertical6}>
              <div className={styles.yayyGreatI}>
                Yayy, Great I would love to join the League!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalWrapper2}>
          <div className={styles.autoLayoutHorizontal16}>
            <div className={styles.alsoCongratsOn}>
              Also, congrats on your lead approval
            </div>
          </div>
        </div>
        <div className={styles.groupInner1}>
          <div className={styles.autoLayoutVerticalParent}>
            <div className={styles.autoLayoutVertical7}>
              <div className={styles.autoLayoutHorizontal17} />
            </div>
            <button className={styles.autoLayoutHorizontal18}>
              <div className={styles.thanksLookingForward}>
                Thanks! Looking forward for more
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameWrapper8}>
          <div className={styles.frame17}>
            <div className={styles.typeYourMessageParent}>
              <input
                className={styles.typeYourMessage}
                placeholder="Type your Message..."
                type="text"
              />
              <div className={styles.frame18}>
                <img className={styles.frameIcon3} alt="" src="/frame-3.svg" />
              </div>
            </div>
            <img className={styles.frameIcon4} alt="" src="/frame-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatVishnu;
