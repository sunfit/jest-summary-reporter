function processFullPath(fullPath) {
  let pathSeparationPattern = /^(.+)(test\\.+\\)(.+)$/;
  let pathSeparationResult = fullPath.match(pathSeparationPattern);
  //Can happen if there is no `test` folder on the path
  if (!pathSeparationResult) {
    return path({
      path: "",
      file: slash(fullPath.match(/(.+\\)(.+)$/)[2])
    })
  } else {
    return path({
      path: slash(pathSeparationResult[2]),
      file: slash(pathSeparationResult[3])
    })
  }
}

function path({path, file}) {
  return {
    path,
    file,
    toString() {
      return this.path + white(this.file);
    }
  }
}

function slash(s) {
  return s.replace(/\\/g, "/")
}

module.exports = {
  processFullPath
};