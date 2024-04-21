import Modal from './Modal'
import { useModal } from '../../context/Modal';



export default function LeadModal() {
  const { hideModal } = useModal()

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    hideModal(false)
  }

  return (
    <Modal title='New Lead' onSubmit={onSubmit}>
      <div className='modal__row'>
        <div className='modal__col'>1</div>
        <div className='modal__col'>2</div>
      </div>
    </Modal>
  )
}
