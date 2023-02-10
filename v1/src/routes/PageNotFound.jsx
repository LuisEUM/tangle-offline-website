import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Image } from '../resources/icons/404.svg'
import './pageNotFound.scss'

const PageNotFound = () => {
    const content = useSelector((state) => state.language.language);

    return(
        <div className='wrapper'>
            <p className='title'>404</p>
            <div className='image-wrapper'>
                <Image className='image404' />
            </div>
            <p className='header-lg'>{content.notFound.text}</p>
            <div className='btn-wrapper'>
                <Button className='btn' as={Link} to='/'>{content.notFound.button}</Button>
            </div>
        </div>
    );
}

export default PageNotFound;