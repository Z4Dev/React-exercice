export default ({onClick,active}) => {
    return(
        <div onClick= {onClick} className={`userpart ml-1 mt-3 ${active?'active':''}`}>
            <a href='#' className='flex flex-row items-center'>
                <div className="relative">
                <img className='w-8 h-8 rounded-full' src='https://images-ext-1.discordapp.net/external/ngcZ7zLPUVLYGOqKAdqyKwSlZ-UGW7KYZUH8xGkl1f0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/986842196303040542/a_4fa4894bf38b4fcfe44de15ca7e7bd67.gif'  alt=''/>
                    <span className="top-5 left-6 absolute  w-3 h-3 bg-red-400 border-2 border-gray-800 dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="user_name">Z4</div>
            </a>
        </div>
    )
}