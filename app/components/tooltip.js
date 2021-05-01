import React from "react";
import ReactTooltip from "react-tooltip";

export default class Tooltip extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hovering : false
        }
    }

    onMouseOver(){
        this.setState({
            hovering : true
        })
    }

    onMouseOut(){
        this.setState({
            hovering : false
        })
    }

    render() {
        const {text, id, children} = this.props
        const {hovering} = this.state;

        if (hovering){
          return (<div onMouseOver={() => this.onMouseOver()} onMouseLeave={() => this.onMouseOut()}>
              <ReactTooltip id={id} place="top" effect="solid">
                  {text}
              </ReactTooltip>
              {children}
          </div>)
        }else {
            return (<div  onMouseOver={() => this.onMouseOver()} onMouseLeave={() => this.onMouseOut()}>
                {children}
            </div>)
        }
    }
}