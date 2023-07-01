## Themes and paper

All infos or almost all, are here : https://callstack.github.io/react-native-paper/docs/guides/theming/

* In a next version, i want the app to pick UP the system theme :
https://callstack.github.io/react-native-paper/docs/guides/theming/#sync-dynamic-colors-with-system-colors

## The SAfe Area Question

There is a concept of safe area for any mobile app whether android or ios

That concept is that the OS bottom and top horiontal menus (status bar etc...), must remain accessible and even visible, while the app is being used.

Facts important to understand : 
* There is in react-native, a IOS specific component named [`SafeAreaView`](https://reactnative.dev/docs/safeareaview), but not for `android`.
* The question of how to add support for both ios and `android`, is well known since more than 3 years
* for a while, people solved the issue by implementing it themselves (not so hard)
* but arnound 2021, expo released a solution for both platform : https://docs.expo.dev/versions/latest/sdk/safe-area-context/



## ERrors I experienced

* I experienced : 
```bash

```

* And I found that this issue is today as of june 2023 no solved yet : https://medium.com/@david.zhao.blog/setnativeprops-is-deprecated-please-update-props-using-react-state-instead-7d5b17e4c197
* https://stackoverflow.com/questions/75498923/in-react-native-how-can-i-solve-error-setnativeprops-is-deprecated
