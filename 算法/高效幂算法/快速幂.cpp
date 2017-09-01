#include <iostream>
using namespace std;
long long int quick_power(int base, int power) {
    long long int ans = 1;
    while (power != 0) {
        if (power & 1) {
            ans *= base;
        }
        base *= base;
        power = power >> 1;
    }
    return ans;
}
int main(){
    long long int res = quick_power(2, 10);
    cout<<res<<endl;
    return 0;
}


