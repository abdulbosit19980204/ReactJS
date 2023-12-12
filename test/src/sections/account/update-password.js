import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdatePassword() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color='error' onClick={handleClickOpen}>
        Parolni o'zgartirish
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Parolni yangilash</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Parolingizni yangilash uchun quydagi maydonlarni to'ldiring.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Eski parol"
            type="password"
            fullWidth
            variant="standard"
            color='error'
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Yangi parol"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Yangi parolni qayta kiriting"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Bekor qilish</Button>
          <Button onClick={handleClose}>Saqlash</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}