

## Issues I experienced

* I used `@react-navigation/drawer` as instructed in : from there i saw many errors related to `react-native-reanimated`, and i downgraded `react-native-reanimated`, from version 3.* to latest 2.* version here it was `2.17.0` on 4th of July 2023
* once downgraded reanimated, i no more have problems with, 
* but i got a new issue, which is explained by the fact that react-native-web does not include the `BackHandler` , about that issue I found : 
  * very clear on `react-native-web` package : https://github.com/necolas/react-native-web/issues/2504 , all that done in the release 0.19.0 see https://github.com/necolas/react-native-web/releases/tag/0.19.0
  * Note that issue is from march 2023, so i will find th latest version of react-native-web before March 1st 2023 , or the latest release before 0.19.0 , which is https://github.com/necolas/react-native-web/releases/tag/0.18.0
  * so i ran `yarn remove react-native-web && yarn add react-native-web@0.18.0`
  * AND IT WORRRRKEDDDDD :D :D :D :D