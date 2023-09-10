#include <iostream>
#include <vector>
using namespace std;


class Solution
{
public:
    vector<vector<int>> rotate(vector<vector<int>> &matrix)
    {
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < i; j++)
            {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        for (int i = 0; i < matrix.size(); i++)
        {
            reverse(matrix[i].begin(), matrix[i].end());
        }
        return matrix;
    }
};

int main() {
    vector<vector<int>> matrix = {{1}};
    Solution s;
    s.rotate(matrix);
    return 0;
}