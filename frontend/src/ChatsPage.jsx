import {MultiChatWindow, MultiChatSocket, useMultiChatLogic,} from 'react-chat-engine-advanced';
const ChatsPage =  (props) => {
   const chatprops = useMultiChatLogic(
    '0091a4e9-5273-4d38-ba4b-7d7a2cf9f140',
    props.user.username,
    props.user.secret
    );

return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatprops}/>
        <MultiChatWindow {...chatprops} style={{ height : '100%'}} />
    </div>
)
}

export default ChatsPage;