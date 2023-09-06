#include <iostream>
#include <vector>
using namespace std;

void printMatrix(vector<vector<int>> matrix, string text)
{
    cout << "\n"
         << text << "---" << endl;
    for (int row = 0; row < matrix.size(); row++)
    {
        for (int col = 0; col < matrix[row].size(); col++)
        {
            cout << matrix[row][col] << " ";
        }
        cout << endl;
    }
    cout << "--------\n"
         << endl;
}

vector<int> generateRow(int N)
{
    int ans = 1;
    vector<int> row = {ans};

    if (N > 1)
    {
        int i = 1;
        if (N % 2 == 0)
        {

            for (i; i < ((N / 2) - 1); i++)
            {
                ans = (ans * (N - i)) / i;
                row.push_back(ans);
            }
        }
        else
        {
            for (i; i < (N - 1) / 2; i++)
            {
                ans = (ans * (N - i)) / i;
                row.push_back(ans);
            }
        }
        for (i; i < N; i++)
        {
            ans = (ans * (N - i)) / i;
            row.push_back(ans);
        }
    }
    return row;
}

class Solution
{
public:
    vector<vector<int>> generate(int numRows)
    {
        vector<vector<int>> pt = {};
        if (numRows > 0)
        {
            if (numRows == 1)
            {
                pt.push_back({1});
                return pt;
            }
            else if (numRows == 2)
            {
                pt.push_back({1});
                pt.push_back({1, 1});
                return pt;
            }
            else
            {
                for (int i = 1; i <= numRows; i++)
                {
                    pt.push_back(generateRow(i));
                }
            }
        }

        return pt;
    }
};
int main()
{
    Solution s;
    printMatrix(s.generate(5), "Answer");
    return 0;
}