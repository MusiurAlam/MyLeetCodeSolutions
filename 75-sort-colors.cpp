#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        vector<int> arr = {0, 0, 0};
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                arr[0] += 1;
            }
            if(nums[i] == 1){
                arr[1] += 1;
            }
            if(nums[i] == 2){
                arr[2] += 1;
            }
        }
        for(int i = 0; i < arr[0]; i++){
            nums[i] = 0;
        }
        for(int i = arr[0]; i < arr[0] + arr[1]; i++){
            nums[i] = 1;
        }
        for(int i = arr[0] + arr[1]; i < nums.size(); i++){
            nums[i] = 2;
        }
    }
};

int main(){

    Solution s;
    vector<int> nums = {2,0,1,2,0,1};
    s.sortColors(nums);
    return 0;
}