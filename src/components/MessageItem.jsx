export default ({data}) => {
    return (
        <div className="MessageLine">
            <div className="messageItem">
                <img className='w-9 h-9 rounded-full' src='https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg'  alt=''/>
                <div className="messageText">Z4</div>
                <div className="messageData">Hoje às 01:52</div> 
            </div>
            <div className="messageContent">{data.body}!</div>
        </div>
    )
}