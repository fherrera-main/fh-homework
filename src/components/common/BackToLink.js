import { Link } from 'react-router-dom';
import styles from './BackToLink.module.css';

const BackToLink = ({reditectTo, text = 'Default text'}) => {
    return (
        <>
            <span className={styles.backLinkSpan}>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 10C15.8333 10.3452 15.538 10.625 15.1736 10.625H7.53021L10.3623 13.3081C10.62 13.5521 10.62 13.9479 10.3623 14.1919C10.1047 14.436 9.68698 14.436 9.42934 14.1919L5.47101 10.4419C5.21337 10.1979 5.21337 9.80214 5.47101 9.55806L9.42934 5.80806C9.68698 5.56398 10.1047 5.56398 10.3623 5.80806C10.62 6.05214 10.62 6.44787 10.3623 6.69194L7.53021 9.375H15.1736C15.538 9.375 15.8333 9.65482 15.8333 10Z" fill="white" />
                </svg>
                <Link to={reditectTo} className={'mt-5 ' + styles.backLink}> {text}</Link>
            </span>
        </>
    )
}

export default BackToLink
