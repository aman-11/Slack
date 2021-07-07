import React from 'react'
import { useDispatch } from 'react-redux'
import {enterRoom} from '../features/appSlice'
import styled from 'styled-components'
import { db } from '../firebase'

function SidebarOption({ Icon, addChannelOption, title, id }) {

    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt('Please enter the channel Name')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                    <SidebarOptioChannel>
                        <span>#</span>{title}
                    </SidebarOptioChannel>
                )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display:flex;
    font-size:12px;
    align-items:center;
    cursor: pointer;
    padding-left:2px;

    :hover{
        opacity:0.9;
        background-color:#340e36;
    }

    >h3{
        font-weight:500;
    }

    >h3>span{
        padding:15px;
    }
`;

const SidebarOptioChannel = styled.h3`
    padding:10px;
    font-weight:300;
`;