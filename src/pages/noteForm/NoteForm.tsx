import React from 'react';

import Box from '@mui/material/Box';

import { useStyles } from './styles';

import { AuthorField, CustomButton, NoteField, Selector } from 'components';
import { useNoteForm } from 'hooks';
import { ReturnComponentType } from 'types';

export const NoteForm = (): ReturnComponentType => {
  const styles = useStyles();

  const [
    region,
    author,
    noteValue,
    regions,
    hasAuthorError,
    isButtonDisabled,
    onNoteFormSubmit,
    handleAuthorChange,
    handleNoteValueChange,
    handleSelectRegionChange,
  ] = useNoteForm();

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
            hasAuthorError={hasAuthorError}
          />
          <Selector
            value={region}
            regions={regions}
            onChange={handleSelectRegionChange}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton type="submit" isDisabled={isButtonDisabled}>
            Создать
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
