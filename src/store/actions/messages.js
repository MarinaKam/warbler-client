import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import {
    LOAD_MESSAGES,
    REMOVE_MESSAGES
} from '../actionTypes';

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
   type: REMOVE_MESSAGES,
   id
});

export const fetchMessages = () => dispatch => (
    apiCall('GET', '/api/messages')
        .then(res => dispatch(loadMessages(res)))
        .catch(err => addError(err.message))
);

export const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id =currentUser.user.id;
    return apiCall('POST', `/api/users/${id}/messages`, { text })
        .then(res => {})
        .catch(err => addError(err.messages))
};

export const removeMessages = (user_id, message_id) => dispatch => (
    apiCall('DELETE', `/api/users/${user_id}/messages/${message_id}`)
        .then(() => dispatch(remove(message_id)))
        .catch(err => addError(err.messages))
);
