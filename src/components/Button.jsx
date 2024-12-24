import PropTypes from 'prop-types';


/** 
 * Button
*/

export const Button = ({ variant, children, onClick }) => {
    const styles = {
        primary: 'bg-primary text-white',
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        link: 'bg-transpirent text-blue-500 underline',
    };

    return (
        <button
            className={`px-4 py-2 rounded ${styles[variant]} hover:opacity-80`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

/**
 * Outline Button
 */

export const OutlineButton = ({ variant, children, onClick }) => {
    const styles = {
        primary: 'outline outline-2 outline-outline-primary text-primary',
        success: 'outline outline-2 outline-success text-success',
        danger: 'outline outline-2 outline-danger text-danger',
    };

    return (
        <button
            className={`px-4 py-2 rounded ${styles[variant]} hover:opacity-80`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

OutlineButton.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}
