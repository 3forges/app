

## Install

```bash
export ANDROID_SDK_TOOLS_VERSION=""
export ANDROID_SDK_TOOLS_OS="windows"
export ANDROID_SDK_TOOLS_OS="darwin"
export ANDROID_SDK_TOOLS_OS="linux"

export ANDROID_SDK_TOOLS_DWNLD_URL=""

wget https://dl.google.com/android/repository/tools_r25.2.3-macosx.zip

export ANDROID_SDK_ROOT=/Users/ciandroid/android-sdk-macosx
export ANDROID_HOME=/Users/ciandroid/android-sdk-macosx

# ---
# We need to first install dependencies : 
#  + a recent version of openjdk, like 17 I think (june 2023)
# 

# ----
# We download and unzip the binary


${ANDROID_HOME}/tools/bin/sdkmanager --update
${ANDROID_HOME}/tools/bin/sdkmanager "platforms;android-25" "build-tools;25.0.2" "extras;google;m2repository" "extras;android;m2repository"
${ANDROID_HOME}/tools/bin/sdkmanager --licenses

# ---
# finally setup PATH etc...
export ANDROID_SDK_ROOT=/Users/ciandroid/android-sdk-macosx
export PATH=$PATH:$ANDROID_SDK_ROOT/tools
```