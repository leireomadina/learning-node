# Notes

## Multiplication table generator

This is a simple console app that generates number based multiplication tables in txt format based on several arguments. These files are generated inside the output folder.

Execute this command to see the app options:

```bash
  node app
```

This app takes the following arguments:

- base
- limit
- print

```bash
  Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Multiply table number                       [number] [required]
  -l, --limit    Multiply table limit                     [number] [default: 10]
  -p, --print    Prints the table in console          [boolean] [default: false]
```

Example: creates a base 2 multiplication table and prints the result on the console

```bash
  node app -b 2 -p
```

The app uses the following Node.js packages/libraries:

- [**Yargs**](https://www.npmjs.com/package/yargs)
- [**Colors**](https://www.npmjs.com/package/colors)
