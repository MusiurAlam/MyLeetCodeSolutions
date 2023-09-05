#include <iostream>
#include <vector>
using namespace std;

void printMatrix(vector<vector<int>> matrix)
{
    cout << "\n new--------" << endl;
    for (int row = 0; row < matrix.size(); row++)
    {
        for (int col = 0; col < matrix[row].size(); col++)
        {
            cout << matrix[row][col] << " ";
        }
        cout << endl;
    }
    cout << "--------" << endl;
}

class Solution
{
public:
    void setZeroes(vector<vector<int>> &matrix)
    {

        int extVar = 1;
        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix[i].size(); j++)
            {
                if (matrix[0][0] == 0 && i == 0 && j == 0)
                {
                    extVar = 404;
                    matrix[i][j] = 404;
                }
                if (matrix[i][j] == 0)
                {

                    if (j == 0 && i > 0)
                    {
                        extVar = 409;
                    }
                    else
                    {
                        matrix[i][0] = 404; // setting row
                        matrix[0][j] = 404; // setting col
                    }
                }
            }
        }

        cout << extVar << endl;
        printMatrix(matrix);

        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 1; j < matrix[i].size(); j++)
            {
                if (matrix[0][j] == 404 || matrix[0][j] == 0)
                {
                    matrix[i][j] = 0;
                }
            }
        }
        cout << extVar << endl;
        printMatrix(matrix);

        for (int i = 0; i < matrix.size(); i++)
        {
            for (int j = 0; j < matrix[i].size(); j++)
            {
                if (matrix[i][0] == 404 || matrix[i][0] == 0)
                {
                    matrix[i][j] = 0;
                }
            }
            if (extVar == 404 || extVar == 409)
            {
                matrix[i][0] = 0;
            }
        }

        cout << extVar << endl;
        printMatrix(matrix);
    }
};

int main()
{

    vector<vector<int>> matrix = {{1}, {0}, {2}};

    Solution solution1;
    solution1.setZeroes(matrix);
    return 0;
}
