import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMessages, removeMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { messages, removeMessages, currentUser } = this.props;
        const messageItem = messages.map(({_id, text, user, createAt}) => (
           <MessageItem
               key={_id}
               text={text}
               user={user}
               date={createAt}
               username={user && user.username}
               profileImageUrl={user && user.profileImageUrl}
               removeMessage={removeMessages.bind(this, user._id, _id)}
               isCorrectUser={currentUser === user._id}
           />
        ));
        console.log(messages);
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <div className="list-group" id="messages">
                        {messageItem}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   messages: state.messages,
    currentUser: state.currentUser.user.id
});

export default connect(mapStateToProps, {fetchMessages, removeMessages})(MessageList);