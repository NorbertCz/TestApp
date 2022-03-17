import React, {useState} from 'react';
import {Button} from "@chakra-ui/core";
import {HiOutlineHeart, HiHeart} from "react-icons/hi";
import {FaRegComment} from "react-icons/fa";
import {GrShare} from "react-icons/gr";


export const LikeButton = (props) => {
    const {status} = props; 
    const [isLiked, setIsLiked] = useState(status)

    return (
        <Button 
          _focus={{outline: "none"}}
          leftIcon={isLiked ? HiHeart :  HiOutlineHeart} 
          size="sm" 
          variant="ghost" 
          color={isLiked ? "red.600" : "gray.700"}
          onClick={() => {setIsLiked(!isLiked)}}
         >
            {isLiked ? "Polubiono" : "Polub"}
        </Button>
    );
};

export const CommentButton = (props) => {
    const {status} = props;
    const[Comment] = useState(status)

    return (
        <Button bg="white" leftIcon={FaRegComment} >
        Comment
      </Button>
        
      
    );
};
export const ShareButton = (props) => {
    const{status} = props;
    const[Share] = useState(status)

    return (
        
        <Button bg="white" leftIcon={GrShare}>
            Share
        </Button>
        
    );
};

