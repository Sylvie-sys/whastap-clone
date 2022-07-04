import './styles.css';

function MessageList() {
    return (
        <aside className="aside-box">
            {/* <img src="https://pps.whatsapp.net/v/t61.24694-24/217827628_1208083816603460_2809788846920893319_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVyo1Z8LwGUw-8oHaXLVLOv8zGT0GkGn5GlweyyHTqQYtA&amp;oe=62CC1D68" alt="" draggable="false" class="_8hzr9 M0JmA i0jNr"></img> */}
            <div className="header-section">
                <div className="top-header-section">
                    <div>
                        <button className="profile-img-btn"><img src="https://pps.whatsapp.net/v/t61.24694-24/291496118_532724425257673_8797737645636325444_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=bcb59647c4235bf7f52765efe37f138b&amp;oe=62D3269D" alt="" draggable="false" class="profile-img" /></button>
                    </div>
                    <div className='header-section_icons'>
                        {/* <span data-testid="status-v3-unread" data-icon="status-v3-unread" class=""><svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></span> */}
                        <button><svg className='status' version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></button>
                        <button><svg className='new-chat' viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></button>
                        <button><svg className='menu' viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></button>
                    </div>
                </div>
                <button className="middle-header-section">
                    <span data-testid="alert-notification" data-icon="alert-notification" class=""><svg viewBox="0 0 48 48" width="48" height="48" class=""><path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg></span>
                    <div className="middle-header_text">
                        <h4>Get notified of new messages</h4>
                        <span>Turn on the desktop notifications</span>
                        {/* <span data-testid="chevron-right-text" data-icon="chevron-right-text" class="l7jjieqr hymafltn k6y3xtnu fewfhwl7"><svg viewBox="0 0 8 12" width="8" height="12" class=""><path fill="currentColor" d="m2.173 1 4.584 4.725-4.615 4.615-1.103-1.103 3.512-3.512L1 2.173 2.173 1z"></path></svg></span> */}
                    </div>
                </button>
                <div className="bottom-header-section">
                    <div className="bottom-header-container">
                        <span data-testid="search" data-icon="search" class=""><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg></span>
                        <input type="text" placeholder='Search or start a new chat' />
                    </div>
                </div>
            </div>

            <div className='body-section'>
                {/* <MessageCard name="Khan" date="6/4/2022" message="Message Content" />
                <MessageCard name="Khan" /> */}

                <button className='card-btn'>
                    <div className="card">
                        <img src="https://pps.whatsapp.net/v/t61.24694-24/211826250_363367295466165_3797773433115823567_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVweF2PwIoGMAULWiXI5mA9gR_FwMghRWECT6J5-yinIcQ&amp;oe=62D34166" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Khan</p>
                                <p className='date'>10: 40PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'><svg viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>Slm capo</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/268772028_117735397366081_6841187990872155504_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVwtZBCF4sfAFQXEMN-4H_6DOLRb80FfvYYhyPKQj637OQ&amp;oe=62D3A7C3" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Java Monday Evening Grp</p>
                                <p className='date'>10: 23PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>+250 787 003 130 left</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/183592392_159611266504975_991478195217552020_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVxiYKwXxud0omtDX_yg-sV6Qb9p9vLDZsqdkIGN836cMg&amp;oe=62D2511F" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Future Programmers</p>
                                <p className='date'>10: 20PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>Eric Ishimwe AUCA: No</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/289048539_583486203146516_4377962761476895948_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=0b8ddf3718e421cf458ce956d2299511&amp;oe=62D08A5B" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Karera Olivier</p>
                                <p className='date'>10: 10PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'><svg viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>Thats the spirit 👊</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/289692951_570259344536069_2959391221299221177_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVywRqnxnt-hEVW2sOR4yBA2uO4SIzihCTNMEPD7ztDaPw&amp;oe=62D47413" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Abraham Auguste</p>
                                <p className='date'>9: 19PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'><svg viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>👊</p>
                            </div>
                        </div>
                    </div>

                </button>



                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/268772028_117735397366081_6841187990872155504_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVwtZBCF4sfAFQXEMN-4H_6DOLRb80FfvYYhyPKQj637OQ&amp;oe=62D3A7C3" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Java Monday Evening Grp</p>
                                <p className='date'>8: 50PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>+250 787 003 130 left</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/183592392_159611266504975_991478195217552020_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVxiYKwXxud0omtDX_yg-sV6Qb9p9vLDZsqdkIGN836cMg&amp;oe=62D2511F" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Future Programmers</p>
                                <p className='date'>7: 53PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>Eric Ishimwe AUCA: No</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/285266555_2389122031225635_7526457465051802643_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVyv8rixhIiEp1XY1-0cmi2Ou7vlNAOCw6ij86-CLbdBQQ&amp;oe=62D21781" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Real Friends</p>
                                <p className='date'>7: 54PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>Paccy: Watwikuruye c?</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/289048539_583486203146516_4377962761476895948_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=0b8ddf3718e421cf458ce956d2299511&amp;oe=62D08A5B" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Karera Olivier</p>
                                <p className='date'>7: 23PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'><svg viewBox="0 0 18 18" width="18" height="18" class=""><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>Thats the spirit 👊</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/183592392_159611266504975_991478195217552020_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVxiYKwXxud0omtDX_yg-sV6Qb9p9vLDZsqdkIGN836cMg&amp;oe=62D2511F" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Future Programmers</p>
                                <p className='date'>6: 50PM</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>Eric Ishimwe AUCA: No</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/227723283_621319455620587_2546999499566072587_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVxwKSx2ycpbtBdZY5Ibnm8nG3HDEaUSdeQvoHda-8JkpQ&amp;oe=62D20F01" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>GDG Kigali Forum</p>
                                <p className='date'>Yesterday</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>+250 787 003 130 left</p>
                            </div>
                        </div>
                    </div>

                </button>


                <button className='card-btn'>
                    <div className="card">
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/268772028_117735397366081_6841187990872155504_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVwtZBCF4sfAFQXEMN-4H_6DOLRb80FfvYYhyPKQj637OQ&amp;oe=62D3A7C3" alt="" draggable="false" class="profile-pic" />
                        <div className="card-content">
                            <div className="upper-content">
                                <p className='contact-name'>Java Monday Evening Grp</p>
                                <p className='date'>Saturday</p>
                            </div>
                            <div className="lower-content">
                                <p className='message-content'><span className='message-status'></span>+250 787 003 130 left</p>
                            </div>
                        </div>
                    </div>

                </button>


                
            </div>
        </aside>
    )
}

export default MessageList;