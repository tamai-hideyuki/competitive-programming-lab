// 問題: 答えで二分探索
// N 本のケーブル（各長さ L[i]）から、同じ長さの K 本のケーブルを切り出したい。
// 切り出せるケーブルの最大長を求めよ。
//
// 入力例: L = [8, 15, 20], K = 6
// 出力例: 7

using System;

class CableCut {
    static int[] L;
    static int K;

    static bool CanGet(int x) {
        int count = 0;
        foreach (int l in L) {
            count += l / x;
        }
        return count >= K;
    }

    static void Solve() {
        L = new int[] {8, 15, 20};
        K = 6;

        int lo = 1;
        int hi = 0;
        foreach (int l in L) {
            if (l > hi) hi = l;
        }

        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (CanGet(mid)) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        Console.WriteLine(hi);
    }

    static void Main() {
        Solve();
    }
}
