#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans = {};
        for(int i = 0; i < nums.size(); i++){
            ans.push_back(0);
        }
        for(int i = 0; i < nums.size(); i++){
            ans[i] = nums[nums[i]];
        }

        return ans;
    }
};