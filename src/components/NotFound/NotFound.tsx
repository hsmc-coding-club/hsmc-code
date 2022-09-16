import { Link } from "react-router-dom";
import NotFoundImg from './NotFound.png';

function NotFound({isLesson} : {isLesson?: boolean}) {
    return (
        <div className="notFound">
            <img style={{maxWidth: "95%", maxHeight: "400px"}} alt="Not found" src={NotFoundImg} />
            <h1>Uh oh!</h1>
            <p>
                It seems like we couldn't find that {isLesson ? 'lesson. We probably haven\'t created it yet!' : 'page.'}
            </p>
            {isLesson ?
                <p>Still hungry for more code? Try coding a project by yourself, or check back next week. <b>We're always updating our site with new things to do!</b></p> :
                <Link to="/">You better return home.</Link>
            }
            {isLesson && <Link to="/">Return home</Link>}
        </div>
    )
}

export default NotFound;