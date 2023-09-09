#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int maxSubArray(vector<int> &nums)
    {
        long long maxi = INT_MIN;
        int sum = 0;
        
        for(int i = 0; i < nums.size(); i++){
            sum += nums[i];
            if(sum > maxi){
                maxi = sum;
            }
            if(sum < 0){
                sum = 0;
            }
            cout << sum << " ";
        }
        // cout << endl;
        // cout << maxi;
        return maxi;
    }
};

int main()
{
    Solution s;
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    s.maxSubArray(nums);
    return 0;
}