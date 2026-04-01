# 競技プログラミング Lab

競技プログラミングのアルゴリズムを複数言語で実装・学習するためのリポジトリです。

## ディレクトリ構成

```
languages/
├── python/
├── rust/
├── go/
├── typescript/
├── cpp/
└── <新しい言語>/        ← 言語を追加する場合はここにディレクトリを作成
    ├── brute-force/
    ├── simulation/
    ├── string-processing/
    ├── sorting/
    ├── prefix-sum/
    ├── greedy/
    ├── binary-search/
    ├── graph-search/
    ├── bit-brute-force/
    ├── divide-and-conquer/
    ├── dp/
    ├── union-find/
    ├── shortest-path/
    ├── topological-sort/
    ├── scc/
    ├── segment-tree/
    ├── fenwick-tree/
    ├── flow/
    └── geometry/
```

## 言語の追加方法

新しい言語を追加するには、以下のコマンドを実行してください:

```bash
for cat in brute-force simulation string-processing sorting prefix-sum greedy binary-search graph-search bit-brute-force divide-and-conquer dp union-find shortest-path topological-sort scc segment-tree fenwick-tree flow geometry; do
  mkdir -p "languages/<言語名>/${cat}"
done
```

## 対応言語

| 言語 | ディレクトリ |
|------|-------------|
| Python | `languages/python/` |
| Rust | `languages/rust/` |
| Go | `languages/go/` |
| TypeScript | `languages/typescript/` |
| C++ | `languages/cpp/` |
| PHP | `languages/php/` |

---

## アルゴリズムカテゴリ一覧（レベル順）

競技プログラミングでは、問題は多くの場合「アルゴリズムの型」で分類できます。
以下は代表的なカテゴリを難易度の目安順に整理したものです。

---

## 初級（アルゴリズム入門）

### 全探索（Brute Force）

すべての候補を試す方法。

用途
- 配列の最大値・最小値
- 条件を満たす組み合わせの列挙
- 2次元グリッドの全探索

計算量: `O(N^k)`（ループのネスト数に依存）

---

### シミュレーション（Simulation）

ルールに従って状態を更新していく。

用途
- サイコロの回転
- ゲーム盤面の更新
- ロボット移動

計算量: 問題依存

---

### 文字列処理（String Processing）

文字列に対する基本操作。

用途
- 回文判定
- 文字数カウント
- substring 検索

計算量: `O(N)` 〜 `O(N^2)`

---

## 初中級

### ソート（Sorting）

配列を並べ替える。

用途
- 上位K個の取得
- 順位付け

代表アルゴリズム: Quick Sort / Merge Sort

計算量: `O(N log N)`

---

### 累積和（Prefix Sum）

区間の合計を高速に計算する。

用途
- 区間和の高速計算
- 二次元累積和

計算量: 前処理 `O(N)` / クエリ `O(1)`

---

### 貪欲法（Greedy）

各ステップで局所的に最適な選択をする。

用途
- 区間スケジューリング
- コイン問題
- 活動選択問題

計算量: 問題依存（多くは `O(N log N)`）

---

## 中級

### 二分探索（Binary Search）

探索範囲を半分ずつ削る。

用途
- ソート済み配列の探索
- 条件を満たす最小値 / 最大値（答えで二分探索）

計算量: `O(log N)`

---

### グラフ探索（Graph Search）

#### BFS（幅優先探索）

用途
- 迷路の最短距離
- 最短ステップ問題

計算量: `O(V + E)`

#### DFS（深さ優先探索）

用途
- 連結成分
- 島の数
- 木構造探索

計算量: `O(V + E)`

---

### bit全探索（Bit Brute Force）

ビットマスクを使って部分集合を全列挙する。

用途
- 部分集合の全列挙
- N が小さい場合の組み合わせ探索

計算量: `O(2^N)`

---

### 再帰・分割統治（Divide and Conquer）

問題を小さい部分問題に分割し、再帰的に解く。

用途
- マージソート
- 逆元の高速計算（繰り返し二乗法）

計算量: 問題依存（多くは `O(N log N)`）

---

## 中上級

### 動的計画法（Dynamic Programming）

部分問題の結果を再利用する。

代表問題
- ナップサック問題
- 部分和問題
- 最長増加部分列（LIS）

派生
- 木DP
- 桁DP
- bitDP
- 区間DP

計算量: 問題依存（多くは `O(N^2)` 〜 `O(NW)` など）

---

## 上級

### Union-Find（Disjoint Set Union）

集合の連結関係を管理する。

用途
- グラフの連結判定
- 最小全域木（Kruskal）

計算量: `O(α(N))`（ほぼ定数）

---

### 最短経路アルゴリズム

グラフ上の最短距離・最小コストを求める。

代表アルゴリズム
- ダイクストラ法: `O((V + E) log V)`
- ベルマンフォード法: `O(VE)`
- ワーシャルフロイド法: `O(V^3)`

---

### トポロジカルソート（Topological Sort）

有向非巡回グラフ（DAG）の順序付け。

用途
- タスクの依存関係解決
- DAG上のDP

計算量: `O(V + E)`

---

### 強連結成分分解（SCC）

有向グラフを強連結成分に分解する。

用途
- 2-SAT
- グラフの縮約

計算量: `O(V + E)`

---

## 超上級

### セグメント木（Segment Tree）

区間クエリを高速処理。

用途
- 区間最大値 / 最小値
- 区間更新（遅延伝播）

計算量: 構築 `O(N)` / クエリ・更新 `O(log N)`

---

### Fenwick Tree（Binary Indexed Tree）

累積和の高速更新。

用途
- 点更新・区間和クエリ
- 転倒数の計算

計算量: クエリ・更新 `O(log N)`

---

### フローアルゴリズム（Flow Algorithms）

ネットワーク上の流量を最適化する。

用途
- 最大流
- 最小カット
- 二部マッチング

計算量: アルゴリズム依存（Dinic法 `O(V^2 E)` など）

---

### 計算幾何（Computational Geometry）

幾何的な問題を扱う。

用途
- 凸包
- 線分交差判定

計算量: 問題依存（凸包は `O(N log N)` など）
