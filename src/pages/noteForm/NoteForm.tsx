import React from 'react';

import Box from '@mui/material/Box';

import { useStyles } from './styles';

import { AuthorField, CustomButton, NoteField, Notification, Selector } from 'components';
import { NotificationColor } from 'enums/NotificationColor';
import { useNoteForm } from 'hooks';
import { ReturnComponentType } from 'types';

export const NoteForm = (): ReturnComponentType => {
  const styles = useStyles();

  const [
    region,
    author,
    noteValue,
    regions,
    isNotificationShowed,
    hasAuthorError,
    isButtonDisabled,
    onNoteFormSubmit,
    onAuthorChange,
    onNoteValueChange,
    onSelectRegionChange,
    onSetIsNotificationShowed,
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
          <NoteField value={noteValue} onChange={onNoteValueChange} />
        </Box>

        <Box sx={{ display: 'flex', mb: 2, gap: 2 }}>
          <AuthorField
            value={author}
            onChange={onAuthorChange}
            hasAuthorError={hasAuthorError}
          />
          <Selector value={region} regions={regions} onChange={onSelectRegionChange} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomButton type="submit" isDisabled={isButtonDisabled}>
            Создать
          </CustomButton>
        </Box>
      </Box>

      {isNotificationShowed && (
        <Notification
          severity={NotificationColor.Success}
          onClose={onSetIsNotificationShowed}
        >
          Заметка успешно добавлена!
        </Notification>
      )}
    </Box>
  );
};
