#include <iostream>
using namespace std;
int main() {
  int a;
  int b = 10;
  a = 11;
  cout<<"a:"<<a<<endl;
  cout<<"b:"<<b<<endl;
  
  int *p = &a;
  cout<<"*p:"<<*p<<endl;
  *p = *p+1;
  cout<<"a:"<<*p<<endl;
  
  p=NULL;
  cout<<"p:"<<p<<endl;
  return 0;
}