import { TextField } from '@material-ui/core'
import React from 'react'

const BodyForm = ({resp,modalStyle, classes, handleHeightChange, handleWidthChange}) => {
    return (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Input board height and width:</h2>
        {resp}
        <form className={classes.userForm} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Height"
            onChange={handleHeightChange}
          />
          <TextField
            id="standard-basic"
            label="Width"
            onChange={handleWidthChange}
          />
        </form>
      </div>
    )
}

export default BodyForm
