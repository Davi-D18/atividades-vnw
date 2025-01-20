export default {
  '*.{js,jsx}': (filenames) => [
    `prettier --write "${filenames.join('" "')}"`,
    `npm run lint --fix ${filenames.map((file) => `--file "${file}"`).join(' ')}`,
    `npm run lint:scss:fix`
  ]
}
