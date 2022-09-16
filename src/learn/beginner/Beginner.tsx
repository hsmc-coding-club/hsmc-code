import { useState } from 'react';
import BeginnerStage from './BeginnerStage/BeginnerStage';
import BeginnerWorkspace from "./BeginnerWorkspace/BeginnerWorkspace";


const toolbox: any = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Controls",
        colour: "rgb(255, 171, 25)",
        contents: [
            { kind: "block", type: "controls_if" },
            {
                kind: "block",
                type: "controls_repeat_ext",
                inputs: {
                    "TIMES": {
                        shadow: {
                            type: "math_number",
                            fields: {
                                "NUM": 10
                            }
                        }
                    },
                }
            },
            { kind: "block", type: "controls_for" },
            { kind: "block", type: "controls_flow_statements" }
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
            { kind: "block", type: "math_number" },
            { kind: "block", type: "math_arithmetic" },
            { kind: "block", type: "math_round" },
        ],
      },
    ],
  };

function Beginner({setRunFn} : {setRunFn: any}) {
    const [workspace, setWorkspace] = useState(null);

    return (<div className="beginnerView">
        <BeginnerWorkspace toolbox={toolbox} />
        <BeginnerStage />
    </div>)
}

export default Beginner;