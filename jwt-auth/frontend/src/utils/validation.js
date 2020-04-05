import React from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Text } from 'react-native'
 
export default function DialogShow() {
  let hereVisible = true; 

  return (
      <Dialog
        visible={true}
        onTouchOutside={() => {
          hereVisible = false
        }}
      >
        <DialogContent>
          <Text>Hello</Text>
        </DialogContent>
      </Dialog>
  );
} 