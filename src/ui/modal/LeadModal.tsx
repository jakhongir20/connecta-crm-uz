import Modal from './Modal'
import { useModal } from '../../context/Modal';



export default function LeadModal() {
  const { hideModal }= useModal()

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    hideModal(false)
  }

  return (
    <Modal title='New Lead' onSubmit={onSubmit}>
      <h1>
        Lead Modal
      </h1>
    </Modal>
  )
}
