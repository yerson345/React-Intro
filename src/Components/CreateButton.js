import '../Styles/CreateButton.css'

function CreateButton({ setOpenModal }) {
  return (
    <div>
      <button className="CreateButton"
        onClick={() => {
          setOpenModal(state => !state);
        }}>+</button>
    </div>
  )
}

export { CreateButton }