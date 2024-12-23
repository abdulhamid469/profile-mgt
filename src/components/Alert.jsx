import PropTypes from 'prop-types';
export const Alert = ({ type, message }) => {
    const colors = {
        danger: 'bg-red-100 text-red-700 border-red-400',
        success: 'bg-green-100 text-green-700 border-green-400',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
    };

    return (
        <div className={`p-4 mb-4 text-sm rounded-lg border ${colors[type]}`}>
            {message}
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

