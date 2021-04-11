import styles from '../../styles/Popup.module.css';
import PropTypes from 'prop-types';
import { BsCheckCircle } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';

const Popup = ({ info, open, autoClose, onClose }): JSX.Element => {
	// if (autoClose) setTimeout(onClose, autoClose);
	return (
		<div className={open ? null : styles.disabled}>
			<div className={styles.wrapper}>
				<BsCheckCircle />
				<p>{info.message}</p>
				<div onClick={onClose}>
					<RiCloseFill style={{ width: '25px', height: '25px' }} />
				</div>
			</div>
		</div>
	);
};

Popup.propTypes = {
	info: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	autoClose: PropTypes.number,
	onClose: PropTypes.func.isRequired,
};

export default Popup;
