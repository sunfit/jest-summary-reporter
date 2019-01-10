class JestSummaryReporter {
  constructor(globalConfig, options) {
    this.globalConfig = globalConfig;
    this.options = options;
  }

  onRunComplete(contexts, results) {
    console.log('\n\nSummary reporter output:');
    if (this.options.diffs) {
      console.log('\nDiffs of failed tests:');
      results.testResults
        .map(testResult => testResult.failureMessage)
        .filter(msg => msg)
        .forEach(msg => console.log(msg));
      console.log('Summary:');
    }
    results.testResults.forEach(printSuiteResults);
  }
}


function printSuiteResults(suiteResult) {
  let failNum = suiteResult.numFailingTests;
  let passNum = suiteResult.numPassingTests;
  let pendingNum = suiteResult.numPendingTests;
  let failed = failNum > 0;

  let failureRatio = `${lightRed(failNum)}/${white(failNum + passNum + pendingNum)}`;
  let failureRatioLiteral = failed ? failureRatio : "";

  let state = black(failed ? bgLightRed(" FAIL ") : bgLightGreen(" PASS "));
  let path = getPath(suiteResult);
  console.log(`${state} ${path.path}${white(path.file)} ${failureRatioLiteral}`);
  if (failNum > 0) {
    printFailedTestNames(suiteResult);
  }
}

function printFailedTestNames(suiteResult) {
  suiteResult.testResults.forEach(testResult => {
    let duration = testResult.duration;
    let durationLiteral = duration > 0 ? `(${duration}ms)` : "";
    if (testResult.status == "failed") {
      console.log(`${red('  ?')} ${testResult.fullName} ${yellow(durationLiteral)}`);
    }
  })
}


function getPath(suiteResult) {
  let pathSeparationPattern = /^(.+)(test\\.+\\)(.+)$/;
  let pathSeparationResult = suiteResult.testFilePath.match(pathSeparationPattern);
  //Can happen if there is no `test` folder on the path
  if (!pathSeparationResult) {
    return {
      path: "",
      file: slash(suiteResult.testFilePath.match(/(.+\\)(.+)$/)[2])
    }
  } else {
    return {
      path: slash(pathSeparationResult[2]),
      file: slash(pathSeparationResult[3])
    }
  }

  function slash(s) {
    return s.replace(/\\/g, "/")
  }
}


let bgLightRed = colorize("\x1b[101m");
let bgLightGreen = colorize("\x1b[102m");
let black = colorize("\x1b[30m");
let white = colorize("\x1b[1m");
let red = colorize("\x1b[31m");
let lightRed = colorize("\x1b[91m");
let yellow = colorize("\x1b[33m");

function colorize(color) {
  let reset = "\x1b[0m";
  return function(s) {
    return color + s + reset;
  }
}

module.exports = JestSummaryReporter;