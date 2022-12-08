
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';

export default () => {
    return (
        <div className="chati">

            <div className="chat-header">

                <div className="chat-header-info">

                    <div className="relative chat-header-info ml-4">
                        <img className='w-8 h-8 rounded-full' src='https://images-ext-1.discordapp.net/external/ngcZ7zLPUVLYGOqKAdqyKwSlZ-UGW7KYZUH8xGkl1f0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/986842196303040542/a_4fa4894bf38b4fcfe44de15ca7e7bd67.gif'  alt=''/>
                        <span className="top-5 left-6 absolute  w-3 h-3 bg-red-400 border-2 border-gray-800 dark:border-gray-800 rounded-full"></span>
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
                
            </div>

            <div className="chat-footer">

                <div className="footer-pre">
                    <div className="chat-header-btn" style={{marginLeft:'20px'}}>
                        <AddCircleIcon style={{color: '#919191'}} />
                    </div>
                </div>

                <div className="footer-inputarea">
                    <input type="text" placeholder='Conversar em @Z4' className="footer-input"/>
                </div>

                <div className="footer-pos">
                    <div className="chat-header-btn">
                        <EmojiEmotionsIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chat-header-btn">
                        <GifBoxIcon style={{color: '#919191'}} />
                    </div>
                </div>

            </div>
        </div>
    )
}