import { CameraProps, CameraView, useCameraPermissions, Camera as ExpoCamera } from 'expo-camera';
import { Fragment, forwardRef } from 'react';
import { CameraPermssions } from './CameraPermission';

export const Camera = forwardRef<CameraView, CameraProps>((props, ref) => {
  const [permission, requestPermission] = useCameraPermissions();
  return <Fragment>
    {
      permission?.granted ?
        <CameraView ref={ref} {...props} /> : <CameraPermssions flex={1} px={4} />
    }
  </Fragment>
})
