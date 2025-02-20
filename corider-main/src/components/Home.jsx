import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import SelfBanner from './SelfBanner';
import Message from './Message';
import MessageBox from './MessageBox';

const Home = () => {
    const [data, setData] = useState({});
    const [page, setPage] = useState(0);
    const [selfImage, setSelfImage] = useState('');
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [messageLoading, setMessageLoading] = useState(false);
    const [lastKnownPosition, setLastKnownPosition] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
            window.scrollTo({ top: lastKnownPosition })
            setData(response.data);
            // console.log(response.data);
            if (response && response.status === 200) {
                setChats(prev => [...prev, ...response.data.chats]);
                response.data.chats.forEach((chat) => {
                    if (chat.sender.self) setSelfImage(chat.sender.image);
                });
                // setTopId(response.data.chats[0].id);/
                setLoading(false);
                setMessageLoading(false);
            }
        };
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handelInfiniteScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {

            if (document.documentElement.scrollTop <= 1) {
                const lastKnownScrollPosition = window.scrollY;
                setLastKnownPosition(lastKnownScrollPosition - lastKnownPosition);
                setMessageLoading(true);
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return (
        <Box height={"100vh"} width={"100%"} display="flex" justifyContent={"center"} alignItems={"center"} >
            <CircularProgress />
        </Box>
    )

    return (
        <Box sx={{ overflowY: "hidden" }}>
            <Box sx={{ position: "fixed", backgroundColor: "#fff", width: { xs: "102vw", sm: "102vw", md: "100vw" }, top: 0, left: 0, right: 0, px: 2, zIndex: 100 }}>
                <Topbar tripName={data.name} />
                <SelfBanner data={data} image={selfImage} />
            </Box>

            <Box sx={{ marginTop: "9rem" }}>
                {/* <Button onClick={loadMoreChats}>Load more chats</Button> */}
                {messageLoading && <CircularProgress />}
                <Box
                    sx={{
                        overflowY: 'scroll',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column-reverse', // Reverse the order of messages
                    }}
                // ref={chatContainerRef}
                >
                    {chats.map(chat => (
                        <Message message={chat.message} isSelf={chat.sender.self} imageURL={chat.sender.image} />
                    ))}
                </Box>
            </Box>

            <MessageBox />
        </Box>
    )
}

export default Home