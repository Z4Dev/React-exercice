import '../App.css' ;

import Servericon from './Servericon'
import User from './user'
import Chat from './chat'


import {useState} from 'react';
import {ListGroup} from 'flowbite-react'
import {HiUserAdd,HiInbox,HiCloudDownload} from "react-icons/hi";

const Home = () => {
    const [serverlist, setServerList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [userlist, setUserList] = useState([{}]);
    const [activechat, setActiveChat] = useState({})
    return (
        <div className="app">
            <div className="serverlist">
                <div className="flex flex-wrap gap-2 flex-col items-center">
                    <div className="app_logo mt-2 hover:animate-pulse">
                        <a href=''>
                            <img className=' server_logo w-12 h-13 rounded-full' src='https://cdn.discordapp.com/icons/169256939211980800/39dd0b5fc5a5c76648775342cf29601b.webp?size=96'  alt=''/>
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
                            <ListGroup.Item active={true} className="teste" icon={HiUserAdd}>Amigos</ListGroup.Item>
                                <ListGroup.Item icon={HiInbox} disabled = {true}>Em Breve</ListGroup.Item>
                                <ListGroup.Item icon={HiCloudDownload} disabled={true}>Em Breve</ListGroup.Item>
                        </ListGroup>

                        <div className="directmessages mt-4 justify-center ">MENSAGENS DIRETAS</div>
                        {userlist.map((item, key) => (
                            <User key={key}/>
                        ))}
                    </div>
                </div>
            </div>
            <Chat/>
        </div>
    )
}

export default Home;