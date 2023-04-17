import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className='container'>
            <h1>Страница не найдена, вы ошиблись</h1>
            <Link to="/">На главную</Link>
        </div>
    );
}

export default NotFound;