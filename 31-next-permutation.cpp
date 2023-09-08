#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void print(vector<int> nums)
{
    for (int i = 0; i < nums.size(); i++)
    {
        cout << nums[i] << " ";
    }
    cout << endl;
}

class Solution
{
public:
    void nextPermutation(vector<int> &nums)
    {
        if (nums.size() == 2 && nums[0] != nums[1] && nums.size() > 1)
        {
            swap(nums[0], nums[1]);
        }
        else if (nums.size() > 2)
        {
            int index = -1;

            for (int i = nums.size() - 2; i >= 0; i--)
            {
                if (nums[i] < nums[i + 1])
                {
                    index = i;
                    break;
                }
            }

            if (index == -1)
            {
                reverse(nums.begin(), nums.end());
            }
            else
            {
                for (int i = nums.size() - 1; i > index; i--)
                {
                    if (nums[i] > nums[index])
                    {
                        swap(nums[i], nums[index]);
                        break;
                    }
                }
                reverse(nums.begin() + index + 1, nums.end());
            }
        }
        print(nums);
    }
};

int main()
{
    vector<int> nums = {1};
    Solution s;
    s.nextPermutation(nums);
    return 0;
}