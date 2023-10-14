function main() {
  fs.writeFileSync("obj.json", JSON.stringify(obj));
  var text = JSON.parse(fs.readFileSync("obj.json"))
  console.log(text)
  }
  main();