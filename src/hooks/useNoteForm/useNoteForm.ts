import { SyntheticEvent, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { UseNoteFormReturnType } from './types';

import { Path, ReducerKey, LocalStorageKey } from 'enums';
import { useFieldValue, useNotification } from 'hooks';
import { parseLocalStorageOrReturnNull } from 'services/localStorage';
import { loadDateInformation, loadTimeZones } from 'store/actions';
import {
  selectDateInformation,
  selectIsDataLoading,
  selectRegions,
} from 'store/selectors';
import { addNote, setDateInformation } from 'store/slices/notes';
import { isEmpty } from 'utils';

const MAX_AUTHOR_LENGTH = 100;
const MINIMAL_NOTES_LENGTH = 0;

export const useNoteForm = (): UseNoteFormReturnType => {
  const dispatch = useDispatch();

  const regions = useSelector(selectRegions);
  const isDataLoading = useSelector(selectIsDataLoading);
  const dateInformation = useSelector(selectDateInformation);

  const [author, handleAuthorChange, handleSetAuthor] = useFieldValue();
  const [region, handleSelectRegionChange, handleSetRegion] = useFieldValue();
  const [noteValue, handleNoteValueChange, handleSetNoteValue] = useFieldValue();
  const [isNotificationShowed, handleSetIsNotificationShowed] = useNotification();

  const hasAuthorError = author.length > MAX_AUTHOR_LENGTH;
  const isButtonDisabled = isDataLoading || hasAuthorError;

  const onNoteFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    dispatch(loadDateInformation(region));
  };

  useEffect(() => {
    if (isEmpty(dateInformation)) {
      const note = {
        text: noteValue,
        sign: author,
        tz: region,
        date: dateInformation,
      };

      dispatch(addNote(note));
      dispatch(setDateInformation(null));

      handleSetNoteValue('');
      handleSetIsNotificationShowed(true);
    }
  }, [dispatch, dateInformation]);

  useEffect(() => {
    const notes = parseLocalStorageOrReturnNull(
      LocalStorageKey.PersistRoot,
      ReducerKey.NoteList,
      Path.Notes,
    );

    const addCorrectAuthorAndRegion = (): void => {
      const { tz, sign } = notes[notes.length - 1];

      handleSetAuthor(sign);
      handleSetRegion(tz);
    };

    if (Array.isArray(notes) && notes.length > MINIMAL_NOTES_LENGTH) {
      addCorrectAuthorAndRegion();
    }

    dispatch(loadTimeZones());
  }, [dispatch, handleSetRegion, handleSetAuthor]);

  return useMemo(
    () => [
      region,
      author,
      noteValue,
      regions,
      isNotificationShowed,
      hasAuthorError,
      isButtonDisabled,
      onNoteFormSubmit,
      handleAuthorChange,
      handleNoteValueChange,
      handleSelectRegionChange,
      handleSetIsNotificationShowed,
    ],
    [
      region,
      author,
      noteValue,
      regions,
      isNotificationShowed,
      hasAuthorError,
      isButtonDisabled,
      onNoteFormSubmit,
      handleAuthorChange,
      handleNoteValueChange,
      handleSelectRegionChange,
      handleSetIsNotificationShowed,
    ],
  );
};
