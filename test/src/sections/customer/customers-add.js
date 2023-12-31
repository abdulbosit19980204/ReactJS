import { Instagram, Search, Telegram, WhatsApp, YouTube } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Grid,
  TextField,
  Divider,
  CardActions,
  Button,
 
} from '@mui/material';
import  {SearchedItems}  from './searched.js';
import { useCallback, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Checkbox from '@mui/material/Checkbox';
const states = [
  {
    value: 'selectstate',
    label: ''
  },
  {
    value: 'tashkent',
    label: 'Toshkent'
  },
    {
    value: 'samarqand',
    label: 'Samarqand'
  },
  {
    value: 'namangan',
    label: 'Namangan'
  },
  {
    value: 'andijon',
    label: 'Andijon'
  },
  {
    value: 'nukus',
    label: 'Nukus'
  },
  {
    value: 'fargona',
    label: "Farg'ona"
  },
  {
    value: 'buhoro',
    label: 'Buhoro'
  },
  {
    value: 'xorazm',
    label: 'Xorazm'
  }
];

export const CustomersAdd = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    userName: '',
    telegramId:''
  });
  const [isSearched, setIsDisplay]=useState(false)
 
  const handleChange = useCallback(
    (event) => {
      console.log(event);
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
      console.log(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  const onSearchHandle = ()=>{
    setIsDisplay(!isSearched)
  }
  
  const onAddHandle = ()=>{
   
    console.log("Qo'shish");
   
  }
  return (
    <Card sx={{ p: 2 }}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <CardHeader />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Ism"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  sx={{ m: 1.5, pr: 5 }}
                />
              </Grid>
              <Grid xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Familya"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  sx={{ m: 1.5, pr: 5 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Telegram Id"
                  name="telegramId"
                  onChange={handleChange}
                  required
                  value={values.telegramId}
                  sx={{ m: 1.5 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  sx={{ m: 1.5, pr: 5 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Telefon raqam"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  sx={{ m: 1.5 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="User name"
                  name="userName"
                  onChange={handleChange}
                  type="text"
                  value={values.userName}
                  sx={{ m: 1.5, pr:5 }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Manzil"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  sx={{ m: 1.5}}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button onClick={onSearchHandle} variant="outlined" size='small'><Search fontSize="small"  /> Qidirish </Button>
          <Button onClick={onAddHandle} variant="outlined" size='small'> + Qo'shish </Button>
        </CardActions>
      </form>

      {isSearched && ( <SearchedItems/> )}
      
    </Card>

    
  );
};
