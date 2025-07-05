import {io} from 'socket.io-client'
export const initSocket = async () => {
    const options={
        reconnection: true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    }
    
    return io(import.meta.env.VITE_SOCKET_SERVER_URL, options);
    //rtn a obj of skt.io client
}