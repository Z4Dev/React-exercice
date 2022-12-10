export default ({onClick,active,infos}) => {
    return(
        <div onClick= {onClick} className={`userpart ml-1 mt-3 ${active?'active':''}`}>
            <a href='#' className='flex flex-row items-center'>
                <div className="relative">
                <img className='w-8 h-8 rounded-full' referrerPolicy="no-referrer" src={infos.avatar}  alt=''/>
                    <span className="top-5 left-6 absolute  w-3 h-3 bg-red-400 border-2 border-gray-800 dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="user_name">{infos.name}</div>
            </a>
        </div>
    )
}