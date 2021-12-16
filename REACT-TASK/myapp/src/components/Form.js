import { Button, Modal } from '@material-ui/core'


const Form = ({handleOpen, handleClose, open, body, moves, splits}) => {
    return (
        <div className={`user-form`}>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >
          Input board height and width
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <div>
        <p>Use the arrow keys to move</p>
          {splits.length <= 1 ? (
            <div>
              <p>Game Over!!!!</p>
              <p>Add board dimensions to play</p>
              <p>Yours Scores: {moves}</p>
            </div>
          ) : (
            <p>Game in progress</p>
          )}
        </div>
      </div>
    )
}

export default Form
