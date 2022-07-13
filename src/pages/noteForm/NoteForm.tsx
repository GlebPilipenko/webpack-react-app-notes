import React from 'react';

// eslint-disable-next-line import/no-unresolved
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Notification, Selector } from 'components';
import { NotificationColor } from 'enums/NotificationColor';
import { useNoteForm } from 'hooks';
import { ReturnComponentType } from 'types';

export const NoteForm = (): ReturnComponentType => {
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
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={onNoteFormSubmit}
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Запись"
        value={noteValue}
        onChange={onNoteValueChange}
        rows={5}
        multiline
      />
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <TextField
          sx={{ minWidth: '70%' }}
          id="outlined-basic"
          label="Подпись"
          value={author}
          onChange={onAuthorChange}
          error={hasAuthorError}
          required
        />
        <Selector value={region} regions={regions} onChange={onSelectRegionChange} />
      </Box>

      <LoadingButton
        type="submit"
        loading={isButtonDisabled}
        disabled={isButtonDisabled}
        loadingPosition="start"
        startIcon={<SendIcon />}
        variant="contained"
        sx={{ maxWidth: '150px', alignSelf: 'flex-end' }}
      >
        Создать
      </LoadingButton>

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
