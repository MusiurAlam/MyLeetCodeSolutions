#include <bits/stdc++.h>
using namespace std;

void Print(vector<vector<int>> &arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        for (int j = 0; j < arr[i].size(); j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << "    ";
    }
    cout << endl;
}

class Solution
{
public:
    vector<vector<int>> merge(vector<vector<int>> &intervals)
    {
        int n = intervals.size();
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> ans = {};

        for (int i = 0; i < n; i++)
        {
            int start = intervals[i][0];
            int end = intervals[i][1];

            if (ans.empty() || start > ans.back()[1])
            {
                ans.push_back(intervals[i]);
            }
            else
            {
                ans.back()[1] = max(ans.back()[1], end);
            }
        }
        Print(ans);
        return ans;
    }
};

int main()
{
    vector<vector<int>> arrs = {{1, 3}, {2, 4}, {2, 6}, {8, 10}, {9, 11}, {15, 18}, {16, 17}};
    Solution s;
    s.merge(arrs);
    return 0;
}