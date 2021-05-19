import React from "react";
import ReactTooltip from "react-tooltip";

function Tooltip({text, id, children, hovering}) {

    if (hovering) { return (<div>
            <div id={id} place="top-right" effect="solid">
                {text}
            </div>
            <ReactTooltip data-tip data-for={id}>
                {children}
            </ReactTooltip>
        </div>)
    } else { return (<div>
            {children}
        </div>)
    }
}

export default Tooltip