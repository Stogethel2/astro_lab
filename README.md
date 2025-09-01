### Matrix-based list filter (TypeScript)

- **Goal**: filter list by query tokens.
- **Rule**: exact id wins; else prefix union.

### Usage

```bash
npm i
npm run test
```

### API

```ts
import { MatrixSubstringFilter } from './src/MatrixFilter';
const items = ["1101","1102","1103"];
const filter = new MatrixSubstringFilter();
filter.filter(items, '1101 1102'); // => ["1101","1102"]
filter.filter(items, '110');       // => ["1101","1102","1103"]
filter.filter(items, '110 1103');  // => ["1103"]
```
