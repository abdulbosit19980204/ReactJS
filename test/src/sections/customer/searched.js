import { Instagram, Telegram, WhatsApp, YouTube } from '@mui/icons-material';
import {
  Button,
 
} from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Checkbox from '@mui/material/Checkbox';
import { useState, useCallback } from 'react';

export const SearchedItems = () => {

 
  const [isShowed, setIsDisplay]=useState(false)
  
  const onAddHandle = ()=>{
   
    console.log("Qo'shish");
setIsDisplay(!isShowed)
   
  }

  const  disableShow = () =>{
    setIsDisplay(!isShowed)
  }


  return (
   <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="primary">
          <AlertTitle><YouTube fontSize="small" color='error' /> Youtube</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
          {
            !isShowed && (
              <ul>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
              </ul>
            )
          }
          <br />
          <ButtonGroup variant="text" aria-label="text button group" size='small'>
            <Button onClick={onAddHandle}><AddIcon /></Button>
            <Button onClick={disableShow}><RemoveIcon/></Button>
            <Button><RemoveRedEyeIcon/></Button>
          </ButtonGroup>
        </Alert>
        <Alert severity="primary">
          <AlertTitle><Instagram fontSize="small" color='secondary' /> Instagram</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
          {
            isShowed && (
              <ul>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
              </ul>
            )
          }
          <br />
          <ButtonGroup variant="text" aria-label="text button group" size='small'>
            <Button onClick={onAddHandle}><AddIcon /></Button>
            <Button onClick={disableShow}><RemoveIcon/></Button>
            <Button><RemoveRedEyeIcon/></Button>
          </ButtonGroup>
        </Alert>
        <Alert severity="primary">
          <AlertTitle><Telegram fontSize="small" color='info' /> Telegram</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
          {
            isShowed && (
              <ul>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
              </ul>
            )
          }
         <br />
          <ButtonGroup variant="text" aria-label="text button group" size='small'>
            <Button onClick={onAddHandle}><AddIcon /></Button>
            <Button onClick={disableShow}><RemoveIcon/></Button>
            <Button><RemoveRedEyeIcon/></Button>
          </ButtonGroup>
        </Alert>
        <Alert severity="primary">
          <AlertTitle><WhatsApp fontSize="small" color='success' /> WhatsApp</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
          {
            isShowed && (
              <ul>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
                <li> <Checkbox size='small' /><a href="#">Tuychiev Abdulbosit</a></li>
              </ul>
            )
          }
         <br />
          <ButtonGroup variant="text" aria-label="text button group"  size='small'>
            <Button onClick={onAddHandle}><AddIcon /></Button>
            <Button onClick={disableShow}><RemoveIcon/></Button>
            <Button><RemoveRedEyeIcon/></Button>
          </ButtonGroup>
        </Alert>
      </Stack>
    
  );
}
