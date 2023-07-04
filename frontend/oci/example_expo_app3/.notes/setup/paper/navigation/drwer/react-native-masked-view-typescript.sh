#!/bin/bash

# ---
# Due to https://github.com/react-native-masked-view/masked-view/issues/149#issuecomment-1430158129

export FILE_TO_UPDATE=./node_modules/@react-native-masked-view/masked-view/types/index.d.ts
cp ${FILE_TO_UPDATE} ${FILE_TO_UPDATE}.previous

cat <<EOF >${FILE_TO_UPDATE}
declare class MaskedViewComponent extends React.Component<MaskedViewProps> {}
export default class MaskedView extends MaskedViewComponent {}
EOF