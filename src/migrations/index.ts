import * as migration_20260327_041220 from './20260327_041220';

export const migrations = [
  {
    up: migration_20260327_041220.up,
    down: migration_20260327_041220.down,
    name: '20260327_041220'
  },
];
