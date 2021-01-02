// commanderモジュールをprogramとしてインポートする
const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// コマンドライン引数をcommanderでパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
console.log(filePath);

// ファイルを非同期で読み込む
fs.readFile(filePath, (err, file) => {
    console.log(file);
});
