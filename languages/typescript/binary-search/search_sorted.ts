// 問題: ソート済み配列の探索
// ソート済み整数配列 nums と整数 target が与えられる。
// target のインデックスを返せ。存在しなければ -1 を返せ。
// 
// 入力例: nums = [1, 3, 5, 7, 9], target = 5
// 出力例: 2

const solve = (): void => {
  const nums = [1, 3, 5, 7, 9];
  const target = 5;

  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      console.log(mid);
      return;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  console.log(-1);
};

solve();
// export {} を書くと、TypeScriptはそのファイルをモジュールとして扱う
// モジュールでは、ファイル内の変数はすべてそのファイルだけのスコープに閉じ込められる
// export {} は「何もエクスポートしない」という意味だが、この1行があるだけでTypeScriptが「このファイルはモジュールだ」と判断する仕組み
export{};
