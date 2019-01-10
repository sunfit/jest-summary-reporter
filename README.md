# Jest summary reporter

Custom reporter for Jest that only prints the summary of the test run.

[![jestsummaryreporternodiffssmall](https://user-images.githubusercontent.com/46559896/50974595-455fe900-14f4-11e9-8a5b-c69d367926d5.png)](https://user-images.githubusercontent.com/46559896/50974595-455fe900-14f4-11e9-8a5b-c69d367926d5.png)

Personally I think this behaviour should not require a custom reporter,
and the level of similarity between this and the default output should be proof enough.

Tested only on my windows machine with a simple pet project.

If you have any questions or suggestions contact me by e-mail.

## Installation

```
npm i -D jest-summarizing-reporter
```

## Usage

CLI:

```
jest --reporters jest-summarizing-reporter
```
Jest Config:

```
{
  "reporters": ["jest-summarizing-reporter"]
}
```

## Options

### diffs
If enabled prints jests default error explanations before the summary
```
{
  "reporters": [
    ["jest-summarizing-reporter", {diffs: true}]
  ]
}
```

## Output examples
Default output:

[![jestsummaryreporternodiffs](https://user-images.githubusercontent.com/46559896/50972422-45a9b580-14ef-11e9-9d64-62202d00c6f9.png)](https://user-images.githubusercontent.com/46559896/50972422-45a9b580-14ef-11e9-9d64-62202d00c6f9.png)

With `diffs` option:

[![jestsummaryreporter](https://user-images.githubusercontent.com/46559896/50972423-46424c00-14ef-11e9-8218-40459b150cde.png)](https://user-images.githubusercontent.com/46559896/50972423-46424c00-14ef-11e9-8218-40459b150cde.png)

When all tests pass:

[![jestsummaryreportersuccess](https://user-images.githubusercontent.com/46559896/50972424-46424c00-14ef-11e9-8c21-8f986d9d2379.png)](https://user-images.githubusercontent.com/46559896/50972424-46424c00-14ef-11e9-8c21-8f986d9d2379.png)

## License

Unlicense