import React, { SyntheticEvent, useEffect } from 'react';

import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';

import { AuthorField, CustomButton, NoteField, Selector } from 'components';
import { Path, ReducerKey, LocalStorageKey } from 'enums';
import { useFieldValue } from 'hooks';
import { parseLocalStorageOrReturnNull } from 'services/localStorage';
import { loadTimeZones } from 'store/actions';
import { addNote } from 'store/slices/notes';
import { ReturnComponentType } from 'types';

const MAX_AUTHOR_LENGTH = 100;

export const NoteForm = (): ReturnComponentType => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const [author, handleAuthorChange, handleSetAuthor] = useFieldValue('');
  const [noteValue, handleNoteValueChange, handleSetNoteValue] = useFieldValue('');
  const [region, handleSelectRegionChange, handleSetRegion] = useFieldValue('Asia');

  const hasFieldError = author.length > MAX_AUTHOR_LENGTH;

  const onNoteFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    const note = {
      text: noteValue,
      sign: author,
      tz: region,
    };

    dispatch(addNote(note));

    handleSetNoteValue('');
  };

  useEffect(() => {
    const notes = parseLocalStorageOrReturnNull(
      LocalStorageKey.PersistRoot,
      ReducerKey.NoteList,
      Path.Notes,
    );

    if (Array.isArray(notes) && notes.length > 0) {
      const { tz, sign } = notes[notes.length - 1];

      handleSetAuthor(sign);
      handleSetRegion(tz);
    }

    dispatch(loadTimeZones());
  }, [dispatch, handleSetRegion, handleSetAuthor]);

  return (
    <Box
      component="form"
      onSubmit={onNoteFormSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box classes={{ root: styles.container }}>
        <Box sx={{ mb: 2 }}>
          <NoteField value={noteValue} onChange={handleNoteValueChange} />
        </Box>

        <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
          <AuthorField
            value={author}
            onChange={handleAuthorChange}
            hasFieldError={hasFieldError}
          />
          <Selector value={region} onChange={handleSelectRegionChange} />
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
