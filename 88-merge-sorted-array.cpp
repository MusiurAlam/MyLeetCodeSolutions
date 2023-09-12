#include <bits/stdc++.h>
#include <algorithm>
using namespace std;

void Print(vector<int> &arr)
{
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

class Solution
{
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        for (int i = 0; i < nums2.size(); i++)
        {
            nums1[nums1.size() - nums2.size() + i] = nums2[i];
        }
        sort(nums1.begin(), nums1.end());
        Print(nums1);
    }
};

int main()
{
    vector<int> num1 = {1,2,3,4,0,0,0}, num2 = {5, 7, 9};
    Solution s;
    s.merge(num1, 7, num2, 3);
    return 0;
}