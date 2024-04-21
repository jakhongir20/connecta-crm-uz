import Modal from './Modal'
export default function OrderModal() {

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  }

  return (
    <Modal title='New Lead' onSubmit={onSubmit}>
      <h1>
        order Modal
      </h1>
    </Modal>
  )
}
