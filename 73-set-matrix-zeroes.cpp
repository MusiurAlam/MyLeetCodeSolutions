#include <iostream>
#include <vector>
using namespace std;

void printMatrix(vector<vector<int>> matrix)
{
    for (int row = 0; row < matrix.size(); row++)
    {
        for (int col = 0; col < matrix[row].size(); col++)
        {
            cout << matrix[row][col] << " ";
        }
        cout << endl;
    }
}

vector<vector<int>> setRow(int i, vector<vector<int>> matrix)
{

    for (int j = 0; j < matrix[i].size(); j++)
    {

        if (matrix[i][j] != 0)
        {
            matrix[i][j] = -404;
        }
    }
    return matrix;
}

vector<vector<int>> setCol(int j, vector<vector<int>> matrix)
{

    for (int i = 0; i < matrix.size(); i++)
    {

        if (matrix[i][j] != 0)
        {
            matrix[i][j] = -404;
        }
    }
    return matrix;
}

class Solution
{
public:
    void setZeroes(vector<vector<int>> &matrix)
    {
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix[i].size(); j++)
            {
                if (matrix[i][j] == 0)
                {
                    matrix = setRow(i, matrix);
                    matrix = setCol(j, matrix);
                }
            }
        }
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix[i].size(); j++)
            {
                if (matrix[i][j] == -404)
                {
                    matrix[i][j] = 0;
                }
            }
        }

        printMatrix(matrix);
    }
};

int main()
{

    vector<vector<int>> matrix = {{0, 1, 0, 1},
                                  {1, 1, 1, 1},
                                  {1, 0, 1, 1},
                                  {1, 1, 1, 1}};

    Solution solution1;
    solution1.setZeroes(matrix);
    return 0;
}