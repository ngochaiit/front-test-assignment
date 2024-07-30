import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Player } from '../../modal/collection';
import MainLayout from '../../layout/MainLayout';
import { CARD_ENDPOINT } from '../../constants';
import { randomId } from '../../utils';

/**
 * Step 3: Render a form and everything needed to be able to create a card
 */

interface DatePickerProps<T = Date> {
  value?: T;
  // other properties...
}

export const CreateCard = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    birthday: null,
    image: '',
  });

  const [error, setError] = useState(null);

  const onHandleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onChangeDate = (value: Date) => {
    setFormValues({
      ...formValues,
      birthday: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post(CARD_ENDPOINT, {
        id: randomId(10_000, 30_000),
        player: formValues,
      });

      history.push('/collection');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 5,
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Card
        </Typography>
        {!!error && (
          <Box>
            <Alert severity="error">Something went wrong. Please retry.</Alert>
          </Box>
        )}
        <TextField
          label="First Name"
          name="firstname"
          value={formValues.firstname}
          fullWidth
          required
          onChange={onHandleInputChange}
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={formValues.lastname}
          fullWidth
          required
          onChange={onHandleInputChange}
        />
        <DatePicker
          label="Date of birth"
          onChange={onChangeDate}
          value={formValues.birthday}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading && (
            <Box mr={4}>
              <CircularProgress size={12} />
            </Box>
          )}
          Submit
        </Button>
      </Box>
    </MainLayout>
  );
};
