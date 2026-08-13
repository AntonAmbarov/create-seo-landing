import * as migration_20260812_051733 from './20260812_051733';
import * as migration_20260812_052357 from './20260812_052357';
import * as migration_20260812_052623 from './20260812_052623';
import * as migration_20260812_052750 from './20260812_052750';

export const migrations = [
  {
    up: migration_20260812_051733.up,
    down: migration_20260812_051733.down,
    name: '20260812_051733',
  },
  {
    up: migration_20260812_052357.up,
    down: migration_20260812_052357.down,
    name: '20260812_052357',
  },
  {
    up: migration_20260812_052623.up,
    down: migration_20260812_052623.down,
    name: '20260812_052623',
  },
  {
    up: migration_20260812_052750.up,
    down: migration_20260812_052750.down,
    name: '20260812_052750'
  },
];
