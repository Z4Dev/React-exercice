import '../App.css' ;

import Servericon from './Servericon'
import User from './user'
import Chat from './chat'

import SettingsIcon from '@mui/icons-material/Settings';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicIcon from '@mui/icons-material/Mic';

import {useState} from 'react';
import {ListGroup} from 'flowbite-react'
import {HiUserAdd,HiInbox,HiCloudDownload} from "react-icons/hi";

const Home = () => {
    const [serverlist, setServerList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [userlist, setUserList] = useState([{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'},{userid: '852347582768262'},{userid: '2121'}]);
    const [activechat, setActiveChat] = useState({})
    return (
        <div className="app">
            <div className="serverlist">
                <div className="flex flex-wrap gap-2 flex-col items-center">
                    <div className="app_logo mt-2 hover:animate-pulse">
                        <a href=''>
                            <img className=' server_logo w-12 h-13 rounded-full' src='https://cdn.discordapp.com/icons/613425648685547541/297546891c4ef5ddd97a913a5aa67762.webp?size=96'  alt=''/>
                        </a>
                    </div>
                    <div className="separator">
                    </div>
                    {serverlist.map((item, key) => (
                        <Servericon key={key}/>
                    ))}
                </div>
            </div>

            <div className="chatlist">
                <div className="userlist">
                    <button className='search justify-center relative'>Encontre ou comece uma conversa</button>
                    <hr className='text-dark mt-3' style={{ width:'100%'}}></hr>
                    <div className="w-48 mt-3">
                        <ListGroup className='menu-initial'>
                                <ListGroup.Item active={true} icon={HiUserAdd}>Amigos</ListGroup.Item>
                                <ListGroup.Item icon={HiInbox} disabled = {true}>Em Breve</ListGroup.Item>
                                <ListGroup.Item icon={HiCloudDownload} disabled={true}>Em Breve</ListGroup.Item>
                        </ListGroup>

                        <div className="directmessages mt-4 justify-center ">MENSAGENS DIRETAS</div>
                        {userlist.map((item, key) => (
                            <User 
                            key={key} 
                            active = {activechat.userid == userlist[key].userid}
                            onClick={() => setActiveChat(userlist[key])}
                            />
                        ))}
                        <div className="infos_user">
                            <div className="infos_user_items">
                                <img className='w-8 h-8 rounded-full' src='https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg'  alt=''/>
                                <div className="top-8 left-8 absolute  w-3 h-3 bg-red-400 border-2 border-gray-800 dark:border-gray-800 rounded-full"></div>
                                <div className="infos_user_username">Z4</div>
                                <div className="infos_buttons">
                                    <div className="infos_user_btn">
                                        <MicIcon  style={{color:'#b9bbbe', width:'20px'}}/>
                                    </div>
                                    <div className="infos_user_btn ml-3">
                                        <HeadphonesIcon style={{color:'#b9bbbe', width:'20px'}}/>
                                    </div>
                                    <div className="infos_user_btn ml-3">
                                        <SettingsIcon style={{color:'#b9bbbe', width:'20px'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {activechat.userid !== undefined &&
                <Chat/>
            }
        </div>
    )
}

export default Home;