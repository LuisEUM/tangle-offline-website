import { useSelector } from 'react-redux';
import './privacy.scss';

const PrivacyPolicy = () => {
    const content = useSelector((state) => state.language.language);

    return(
        <div className='privacy-wrapper container'>
            <p className='header-md'>{content.privacy.header}</p>
            {content.privacy.paragraphs.map((p, i) => (
                <p key={i} className="paragraph">{p.text}</p>
            ))}
        </div>
    );
}

export default PrivacyPolicy;