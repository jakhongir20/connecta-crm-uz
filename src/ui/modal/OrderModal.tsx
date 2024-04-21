import Modal from './Modal'
export default function QuatesModal() {

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  }

  return (
    <Modal title='New Lead' onSubmit={onSubmit}>
      <h1>
        Quates Modal
      </h1>
    </Modal>
  )
}
