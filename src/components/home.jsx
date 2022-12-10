import '../App.css' ;

import Servericon from './Servericon'
import User from './user'
import Chat from './chat'

import SettingsIcon from '@mui/icons-material/Settings';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MicIcon from '@mui/icons-material/Mic';

import {useEffect, useState} from 'react';
import {ListGroup} from 'flowbite-react'
import {HiUserAdd,HiInbox,HiCloudDownload} from "react-icons/hi";

import { Button } from 'flowbite-react';

import Api from '../Api'

const Home = () => {
    const [serverlist, setServerList] = useState([{}]);
    const [userlist, setUserList] = useState([]);
    const [activechat, setActiveChat] = useState({})
    const [user,setUser] = useState(null)
    
    const handleloginbutton = async () => {
        let result = await Api.loginPopup();
        if(result) {
            const newuser = {
                id: result["additionalUserInfo"]["profile"].id,
                username: result["additionalUserInfo"]["profile"].given_name,
                avatar: result["additionalUserInfo"]["profile"].picture,
                email: result["additionalUserInfo"]["profile"].email,
            }
            await Api.addUser(newuser)
            setUser(newuser)
        } else {
            alert('Erro')
        }
    }

    useEffect(() => {
        if(user) {
            const setUserAcccount = async() => {
                const value = await Api.getUsersList(user.id)
                return value
            }
            setUserAcccount().then(async (value) => {
                await setUserList(value)
            })
        }
      },[user]);

      useEffect(() => {
        if(user) {
            const setUserAcccount = async() => {
                const value = await Api.getUsersList(user.id)
                return value
            }
            setUserAcccount().then(async (value) => {
                await setUserList(value)
            })
        }
      },[userlist])
    
    if(user === null) {
        return (
            <div className='flex justify-center items-center mt-5'>
                <Button size="sm" onClick={handleloginbutton}>
                    Login
                </Button>
            </div>
        )
    }

    return (
        <div className="app">
            <div className="serverlist">
                <div className="flex flex-wrap gap-2 flex-col items-center">
                    <div className="app_logo mt-2 hover:animate-pulse">
                        <a href=''>
                            <img className=' server_logo w-12 h-13 rounded-full' src='https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-24.png'  alt=''/>
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

                        <div className="directmessages justify-center " style={{marginTop:'20px'}}>MENSAGENS DIRETAS</div>
                        {userlist.map((item, key) => (
                            <User 
                            key={key}
                            infos={item}
                            active = {activechat.id == userlist[key].id}
                            onClick={() => setActiveChat(userlist[key])}
                            />
                        ))}
                        <div className="infos_user">
                            <div className="infos_user_items">
                                <img className='w-8 h-8 rounded-full' referrerPolicy="no-referrer" src= {user.avatar}  alt=''/>
                                <div className="top-8 left-8 absolute  w-3 h-3 bg-red-400 border-2 border-gray-800 dark:border-gray-800 rounded-full"></div>
                                <div className="infos_user_username">{user.username}</div>
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
            {activechat.id !== undefined &&
                <Chat
                    user = {user}
                    activechat = {activechat}
                />
            }
        </div>
    )
}

export default Home;
