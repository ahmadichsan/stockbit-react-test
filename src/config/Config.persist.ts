import storage from 'redux-persist/lib/storage';
import 'dotenv/config';

export const configPersist = {
  key: 'root',
  storage,
};
