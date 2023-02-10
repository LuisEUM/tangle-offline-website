import { useSelector } from 'react-redux';
import '../scss-variables.scss'
import './offline.scss'

const Offline = () => {
    const content = useSelector((state) => state.language.language);

    return(
        <div className='offline-wrapper'>
            <p className='header-xl'>{content.offline.first}</p>
            <p className='header-lg'>{content.offline.second}</p>
        </div>
    );
}

export default Offline;