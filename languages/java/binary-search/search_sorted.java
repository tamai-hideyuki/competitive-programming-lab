// 問題: ソート済み配列の探索
// ソート済み整数配列 nums と整数 target が与えられる。
// target のインデックスを返せ。存在しなければ -1 を返せ。
//
// 入力例: nums = [1, 3, 5, 7, 9], target = 5
// 出力例: 2

class SearchSorted {
    static void solve() {
        int[] nums = {1, 3, 5, 7, 9};
        int target = 5;

        int lo = 0;
        int hi = nums.length - 1;

        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) {
                System.out.println(mid);
                return;
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        System.out.println(-1);
    }

    public static void main(String[] args) {
        solve();
    }
}
