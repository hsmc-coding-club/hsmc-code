import { BlocklyWorkspace, ToolboxDefinition } from 'react-blockly';
import Blockly from "blockly";
import { useState } from 'react';
import './BeginnerWorkspace.css';

// @ts-ignore - no declaration
import Theme from "@blockly/theme-modern";

function BeginnerWorkspace({toolbox} : {toolbox: ToolboxDefinition}) {
    const [xml, setXml] = useState<any>('');
    const [javascriptCode, setJavascriptCode] = useState<string>();

    function workspaceDidChange(workspace: Blockly.Workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        setJavascriptCode(code);
    }

    return (
        <BlocklyWorkspace
            toolboxConfiguration={toolbox}
            initialXml={xml}
            className="workspace"
            workspaceConfiguration={{
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: "var(--light-gray)",
                    snap: true,
                },
                theme: Theme
            }}
            onWorkspaceChange={workspaceDidChange}
            onXmlChange={setXml}
        />
      )
}

export default BeginnerWorkspace;