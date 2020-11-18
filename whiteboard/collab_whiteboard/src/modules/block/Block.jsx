import React from 'react';
import Whiteboard from '../whiteboard/Whiteboard';
import './block.css';
class Block extends React.Component{
	constructor(props){
		super(props);
	}

	render(){    
		return (
			<div className="block">
				<div className="pick_block_color">
					<input type="choose_color" />
				</div>
				<div class="block-whiteboard">
					<Whiteboard>   </Whiteboard>
				</div>
			</div>
		)
	}
}

export default Block;