
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';

import EmojiPicker from 'emoji-picker-react';

import {useRef} from 'react';

import { useState,useEffect} from 'react';

import Message from './MessageItem'

export default () => {

    const inputRef = useRef(null);

    const myRef = useRef(null)

        const scrollToBottom = () => {
            myRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    
        useEffect(() => {
            scrollToBottom()
        });

    const [menuemoji,setmenuemoji] = useState(false)

    const [text,setText] = useState('');
    const [list,setList] = useState([]);

    const handleemoji = (e,emojiObject) => {
        console.log(inputRef)
        inputRef.current.value += e.emoji
    }

    const handleemojiclick = () => {
        setmenuemoji(menuemoji?false:true)
    }

    return (
        <div className="chati">
            <div className="chat-header">
                <div className="chat-header-info">

                    <div className="relative chat-header-info ml-4">
                        <img className='w-5 h-5 rounded-full' src='https://cdn.discordapp.com/attachments/852683297590476850/1050613114288222268/At.png'  alt=''/>
                        <div className="chat_username">Z4</div>
                    </div>

                </div>

                <div className="chat-header-buttons">

                    <div className="chat-header-btn">
                        <CallIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chat-header-btn">
                        <VideocamIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chat-header-btn">
                        <PersonAddAltIcon style={{color: '#919191'}} />
                    </div>

                </div>
            </div>

            <div className="chat-body">
                <div className="Dm">
                    <div className="userInfo">
                        <img className='w-20 h-20 rounded-full' src='https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg'  alt=''/>
                            <div className="userinfo_name">Z4</div>
                            <div className="userinfo_description">Este é o começo do seu histórico de mensagens diretas com @Z4</div>
                    </div>
                    <div className="divider div-transparent"></div>

                        {list.map((item,key)=> (
                            <Message 
                                key={key} 
                                data={item}
                            />
                        ))}
                        <div ref={myRef} className="teste"></div>
                </div>
            </div>

            <div className="emojiarea" style={{height: menuemoji?'450px':'0px'}}>
                    <EmojiPicker
                        searchDisabled={true}
                        skinTonesDisabled={true}
                        theme={'dark'}
                        width={'350px'}
                        searchPlaceholder={'TESTE'}
                        onEmojiClick={handleemoji}
                    />
                </div>    
            <div className="chat-footer">
                <div className="footer-pre">
                    <div className="chat-header-btn" style={{marginLeft:'20px'}}>
                        <AddCircleIcon style={{color: '#919191'}} />
                    </div>
                </div>

                <div className="footer-inputarea">
                    <input type="text" placeholder='Conversar em @Z4' className="footer-input" ref={inputRef}/>
                </div>

                <div className="footer-pos">
                    <div className="chat-header-btn" onClick={handleemojiclick}>
                        <EmojiEmotionsIcon style={{color:menuemoji?'white':'#919191'}} />
                    </div>
                    <div className="chat-header-btn">
                        <GifBoxIcon style={{color: '#919191'}} />
                    </div>
                </div> 
            </div>
    
            
        </div>
    )
}