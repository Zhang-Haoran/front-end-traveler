import React from 'react';
import { Wrap, Stone, Beach, Whale } from '../styles/stoneWhaleBeach';

class StoneWhaleBeach extends React.Component{
    render() {
        return(
            <Wrap>
               <Stone />
               <Beach />
               <Whale />
            </Wrap>
        )
    }
}

export default StoneWhaleBeach;