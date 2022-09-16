import { Delete } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import './CodeConsole.css';

const defaultLog = console.log;
const defaultWarn = console.warn;
const defaultError = console.error;

function pushToLog(setLogFn: any, log: Array<{type: string, text: string}>, type: string) {
    let texts = [];
    for (var i = 3; i < arguments.length; i++) {
        let text = arguments[i];

        switch(typeof arguments[i]) {
            case 'object':
                text = JSON.stringify(arguments[i], undefined, 2);
                break;
            case 'function':
                continue
            case 'string':
                break;
            case 'undefined':
                text = 'undefined';
                break;
            default:
                text = arguments[i].toString();
        }
        texts.push(text);

    }
    log.push({type, text: texts.join(" ")})
    setLogFn([...log])
}


function CodeConsole({style, onChange} : {style?: any, onChange?: any}) {
    const [log, setLog] = useState<Array<{type: string, text: string}>>([])

    useEffect(() => {
        if (onChange) onChange(log);
    }, [log])

    useEffect(() => {
        console.log = pushToLog.bind(window, setLog, log, 'log');
        console.warn = pushToLog.bind(window, setLog, log, 'warn');
        console.error = pushToLog.bind(window, setLog, log, 'error');
        // @ts-ignore
        console.system = pushToLog.bind(window, setLog, log, 'system');

        return () => {
            console.log = defaultLog;
            console.warn = defaultWarn;
            console.error = defaultError;
            // @ts-ignore
            console.system = undefined;
        }
    }, [log, setLog])

    useEffect(() => {
        const clearConsole = (e:any) => {
            if (e.key === 'l' && e.ctrlKey) {
                e.preventDefault();
                setLog([]);
            }
        }

        window.addEventListener('keydown', clearConsole);

        return () => {
            window.removeEventListener('keydown', clearConsole)
        }
    })

    const printLog = () => {
        let output = [];
        for (let i = log.length - 1; i >= 0; i--) {
            output.push(<span className={log[i].type} key={i}>{log[i].text}</span>)
        }
        return output;
    }

    return (
        <div className="codeConsole" style={style}>
            <button title="Clear Console" className="dark clearBtn" onClick={() => setLog([])}>
                <Delete />
                <span>Clear Console</span>
            </button>
            <div className="codeConsoleBody">
                <div style={{minHeight: "3em", width: "100%"}} />
                { log.length === 0 ?
                    'Your console will show up here.' :
                    printLog()
                }
            </div>
        </div>
    )
}

export default CodeConsole;