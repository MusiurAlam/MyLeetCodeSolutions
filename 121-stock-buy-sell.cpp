#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {

        int minPrice = prices[0];
        int profit = 0;

        for (int i = 0; i < prices.size(); i++)
        {
            if (minPrice > prices[i])
            {
                minPrice = prices[i];
                continue;
            }
            if (profit < prices[i] - minPrice)
            {
                profit = prices[i] - minPrice;
            }
        }

        return profit;
    }
};

int main()
{
    vector<int> prices = {1, 4, 2};
    Solution s;
    cout << s.maxProfit(prices);
    return 0;
}