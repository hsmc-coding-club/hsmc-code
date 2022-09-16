import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import IntermediateStage from './IntermediateStage/IntermediateStage';
import CodeWorkspace from '../../components/CodeWorkspace/CodeWorkspace';

import lessons from './lessons';
import NotFound from '../../components/NotFound/NotFound';
import Modal from '../../components/Modal/Modal';
import IntermediateComplete from './IntermediateComplete.png';
import { ArrowRight } from '@mui/icons-material';

function Intermediate() {
    const { lessonId } = useParams();
    const lessonNum = parseInt(lessonId || '0');
    const lesson = lessons[lessonNum];
    const navigate = useNavigate();

    const [code, setCode] = useState(lesson ? lesson.initialCode || '' : '');
    const [completedLesson, setCompletedLesson] = useState<boolean|null>(false);

    useEffect(() => {
        setCode(lesson ? lesson.initialCode || '' : '');
        setCompletedLesson(false);
    }, [lessonId])

    // Check code and see if it matches the solution
    const checkCode = (code: Array<{type: string, text: string}>) => {
        if (completedLesson === null) return;
        let codeToCheck: Array<{type: string, text: string}> = [];
        
        for (let i = code.length - 1; i >= 0; i--) {
            if (code[i].type === 'system' && code[i].text.startsWith('---- RUNNING ')) {
                codeToCheck = code.slice(i + 1);
                break;
            }
        }
        
        if (codeToCheck.length !== lesson.expectedOutput.length) return;
        
        for (let i = 0; i < codeToCheck.length; i++) {
            if (codeToCheck[i].type !== lesson.expectedOutput[i].type) return;
            if (codeToCheck[i].text !== lesson.expectedOutput[i].text) return;
        }
        
        setCompletedLesson(true);
        confetti({
            zIndex: 5,
            scalar: 2,
            particleCount: 200,
            spread: 360,
            ticks: 100,
            startVelocity: 40,
            origin: {y: 0.6},
            gravity: 0,
            decay: 0.94
        });

        // add to completed:
        const completed = JSON.parse(localStorage.getItem('hsmccc-progress-intermediate') || '{}');
        completed[lessonNum] = 10;
        localStorage.setItem('hsmccc-progress-intermediate', JSON.stringify(completed));
    }

    return (
        <div className="intermediateView">
            {lesson !== undefined ? <>
                <CodeWorkspace key={`${lessonId}-workspace`} nextLessonBtn={completedLesson !== false ? () => setCompletedLesson(true) : undefined} code={code} setCode={setCode} lessonName={lesson.details.title} initialCode={lesson.initialCode} />
                <IntermediateStage key={`${lessonId}-stage`} lesson={lesson} onConsoleChange={checkCode} />
            </> :
            <NotFound isLesson={true} />}
            {(completedLesson && lesson) && <Modal onClickOut={() => setCompletedLesson(null)}>
                <img className="coverImg" alt="Completed lesson" src={IntermediateComplete}></img>
                <h1>You completed this lesson!</h1>
                <p style={{lineHeight: '1.5em'}} dangerouslySetInnerHTML={{__html: lesson.congratsMessage.join("")}} />
                <div className="btnrow">
                    <button onClick={() => setCompletedLesson(null)}>Keep Coding</button>
                    <button className="primary" onClick={() => navigate(`../${lessonNum + 1}`, {})}>
                        <span>On to Lesson {lessonNum + 1}!</span>
                        <ArrowRight />
                    </button>
                </div>
            </Modal>}
        </div>
    )
}

export default Intermediate;