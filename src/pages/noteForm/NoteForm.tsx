import React, { SyntheticEvent, useEffect } from 'react';

import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';

import { AuthorField, CustomButton, NoteField, Selector } from 'components';
import { useFieldValue } from 'hooks';
import { loadTimeZones } from 'store/actions/loadTimeZones';
import { ReturnComponentType } from 'types';

const MAX_AUTHOR_LENGTH = 100;

export const NoteForm = (): ReturnComponentType => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const [author, handleAuthorChange] = useFieldValue('');

  const hasFieldError = author.length > MAX_AUTHOR_LENGTH;

  const onNoteFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('Submit...');
  };

  useEffect(() => {
    dispatch(loadTimeZones());
  }, []);

  return (
    <Box
      component="form"
      onSubmit={onNoteFormSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // classes={{ root: styles.noteFormContainer }}
    >
      <Box classes={{ root: styles.container }}>
        <Box sx={{ mb: 2 }}>
          <NoteField />
        </Box>

        <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
          <AuthorField
            author={author}
            onChange={handleAuthorChange}
            hasFieldError={hasFieldError}
          />
          <Selector />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton type="submit" isDisabled={hasFieldError}>
            Создать
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
