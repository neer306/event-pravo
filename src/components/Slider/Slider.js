import React, { Component } from 'react';
import './slider.scss';
import {range} from '../../utils';


class Slider extends Component {

	state = {
		childrenLength: 0,
		offset: 0,
		windowLength: 3,
		currentWindow: [],
	};

	componentDidMount() {
		this.setState({
			childrenLength: this.props.children.length,
			offset: this.props.offset,
			windowLength: this.props.windowLength,
			currentWindow: range(this.props.windowLength),
		});
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.windowLength !== this.state.windowLength) {
			this.setState({
				currentWindow: range(this.props.windowLength),
			});
		}
	}

	render() {
		const { children } = this.props;

		return (
			<div className={'slider-container'}>
				<button className={'slider-control'} onClick={this.prev.bind(this)}>
					<i className="fas fa-chevron-left">
					</i>
				</button>
				<div className={'slider-list'}>
					{
						this.state.currentWindow.map(item => {
							return children[item];
						})
					}
				</div>
				<button className={'slider-control'} onClick={this.next.bind(this)}>
					<i className="fas fa-chevron-right">
					</i>
				</button>
			</div>
		);
	}

	next = () => {
		this.setState(state => ({
			currentWindow: state.currentWindow.map(item => {
				let nextIndex = item + state.offset;
				if (nextIndex > state.childrenLength - 1) {
					nextIndex = nextIndex - state.childrenLength;
				}
				return nextIndex;
			}),
		}));
	};

	prev = () => {
		this.setState(state => ({
			currentWindow: state.currentWindow.map(item => {
				let prevIndex = item - state.offset;
				if (prevIndex < 0) {
					prevIndex = (state.childrenLength - 1) + prevIndex;
				}
				return prevIndex;
			}),
		}));
	};
}

export default Slider;