import * as migration_20260527_123234 from './20260527_123234';

export const migrations = [
  {
    up: migration_20260527_123234.up,
    down: migration_20260527_123234.down,
    name: '20260527_123234'
  },
];
