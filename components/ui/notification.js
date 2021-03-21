import ReactDOM from 'react-dom'

import classes from './notification.module.css'

function Notification(props) {
  const { title, message, status } = props

  let statusClasses = ''

  if (status === 'success') {
    statusClasses = classes.success
  }

  if (status === 'error') {
    statusClasses = classes.error
  }

  // const cssClasses = `${classes.notification} ${statusClasses}`;

  // return ReactDOM.createPortal(
  return ReactDOM.createPortal(
    <div className={`notification notification--${status}`}>
      <h2 className='notification__title'>{title}</h2>
      <p className='notification__text'>{message}</p>
    </div>,
    document.getElementById('notifications')
  )
  //   document.getElementById('notifications')
  // );
}

export default Notification
