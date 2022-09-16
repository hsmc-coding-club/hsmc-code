import CodeConsole from '../../../components/CodeConsole/CodeConsole';
import { Lesson } from '../lessons';
import './IntermediateStage.css';

function IntermediateStage({lesson, codeConsoleStyles, onConsoleChange} : {lesson: Lesson, codeConsoleStyles?: any, onConsoleChange?: any}) {
    return (
        <aside className="intermediateStage">
            <CodeConsole style={codeConsoleStyles} onChange={onConsoleChange} />
            <div className="instruction" dangerouslySetInnerHTML={{__html: lesson.details.instructions.join("")}} />
        </aside>
    )
}

export default IntermediateStage;