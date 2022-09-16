import Editor from "react-simple-code-editor";
import { useState } from "react";
// @ts-ignore -- idk why types isn't working here
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './OneDark.css';
import './CodeWorkspace.css';
import { ArrowRight, Pause, PlayArrow, Restore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function CodeWorkspace(
    {code, setCode, lessonName, initialCode, nextLessonBtn} :
    {code: string, setCode: any, lessonName: string, initialCode?: string, nextLessonBtn?: () => void}
) {
    const [isRunning, setIsRunning] = useState(false);
    const navigate = useNavigate();

    const runFn = async () => {
        if (!isRunning) {
            setIsRunning(true);
            // Eval can be harmful, yeah.
            // @ts-ignore
            console.system(`---- RUNNING ${new Date().toLocaleTimeString()} ----`);
            try {
                await eval(`(async () => {${code}\n})()`)
            } catch (e:any) {
                console.error(e.toString());
                setIsRunning(false);
                
                throw e;
            }

            setIsRunning(false);
        }
    }

    const resetFn = () => setCode(initialCode || '');

    const hightlightWithLineNumbers = (code: any) =>
            highlight(code, languages.js)
                .split("\n")
                .map((line: string, i: number) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
                .join("\n");
    
    return (
        <div className="codeWorkspace">
            <div className="codeHeader">
                <h2>{lessonName}</h2>
                <div style={{flexGrow: '1'}} />
                {nextLessonBtn &&
                    <button className="nextLessonBtn" onClick={nextLessonBtn}>Next Lesson <ArrowRight /></button>
                }
                <button onClick={resetFn} className="btn danger">
                    <Restore />
                    <span>Reset</span>
                </button>
                <button onClick={() => isRunning ? setIsRunning(false) : runFn()} style={{cursor: 'pointer'}} className={isRunning ? "btn disabled" : "btn primary"}>
                    {isRunning ? <div className="loading"><Pause /></div> : <PlayArrow />}
                    <span>{isRunning ? 'Running' : 'Run'}</span>
                </button>
            </div>
            <div className="codeEditorContainer">
                <Editor
                    value={code}
                    className="codeEditor"
                    onValueChange={code => setCode(code)}
                    highlight={hightlightWithLineNumbers}
                    padding={20}
                />
            </div>
        </div>
        )
}

export default CodeWorkspace;