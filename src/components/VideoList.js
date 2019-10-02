import React from "react";
import styled from "styled-components";

//Styled components, back ticks `` allows you to write template literals!!
const List = styled.ul`
    list-style: none;
    padding-left: 0;
`

const ListItem = styled.li`
    margin-bottom: 1em;
    text-align: right;
    img {
        border: ${props => props.active ? "5px solid palevioletred" : "2px solid gray"};
        border-radius: 10px;
        cursor: pointer;
        :hover {
            border-color: red;
        }
    }
`

//The ${JavaScript goes here} in template literals...

export const VideoList = (props) => {
    //gives permission for this to act as a wrapper element and for other elements 
    //(components) to be rendered inside
    return (
        <List>{props.children}</List>
    )
}

export const VideoListItem = ({video, selectedVideo, onVideoSelect}) => {
    //console.log(video);
    return (
        <ListItem active={video === selectedVideo}>
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                onClick={ () => onVideoSelect(video)}
            />
        </ListItem>
    )
}

//An alternative would be this:
// import React from "react";

// const VideoList = () => {
//     return (
//         <h2>Video List</h2>
//     )
// }

// const VideoListItem = () => {
//     return (
//         <h2>Video List Item</h2>
//     )
// }

// export {VideoList, VideoListItem};