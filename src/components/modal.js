import { useState } from 'react'
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../images/profile.png';
import { userLogOut } from '../redux/sessionsSlice';
import { removeModal } from '../helpers'


ReactModal.setAppElement('#root')
const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.sessionsData.isAuthenticated)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const navigate  = useNavigate()

  const handleLogout = () => {
    dispatch(userLogOut())
    removeModal()
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <div className="modal-wrapper">
      {(token || isAuthenticated) && <img onClick={() => setModalIsOpen(true)} className="avatar" src={avatar} alt="avatar-img"/>}
      <ReactModal
          onRequestClose={() => setModalIsOpen(false)} 
          style={{
              overlay: {
                position: 'absolute',
                display:  'grid',
                width: '95%',
                margin: '0 auto',
                backgroundColor: 'transparent',
                inset: '62px 0 0 0',
              },
              content: {
                width: '100%',
                height: 'clamp(6rem, 10vw, 3rem)',
                justifySelf: 'start',
                borderRadius:'5px',
                position: 'absolute',
                left: '0',
                top: '9%',
              }
            }}
          isOpen={modalIsOpen}>
        <div className="ff-Kumbh modal-container">
          {(<div className="logout" onClick={() => handleLogout()}>logout</div>)}
        </div>
      </ReactModal>
    </div>
  )
}

export default Modal